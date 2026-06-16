import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const skillsRoot = "skills";
const findings = [];

const sensitiveReadPatterns = [
  {
    pattern:
      /\b(ler|leia|lendo|abrir|abra|analisar|analise|inspecionar|inspecione|consultar|consulte)\b[^\n`]*(?:`[^`]*`[^\n`]*)?\.env(?:\.local|(?:\.[\w-]+)?\.local)?\b/iu,
    suggestion:
      "Troque por arquivos de exemplo seguros, como `.env.example`, `.env.sample` ou `.env.template`.",
  },
  {
    pattern:
      /\b(ler|leia|abrir|abra|transcrever|copiar|copie|resumir|resuma)\b[^\n]*(?:chaves?\s+privadas?|tokens?|credenciais?|secrets?\s+reais?)/iu,
    suggestion:
      "Instrua a referenciar secrets apenas por nome/finalidade, sem ler ou copiar valores reais.",
  },
];

const safeEnvExamplePattern =
  /\.env\.(?:example|sample|template)\b|documenta[cç][aã]o equivalente/iu;

const codebaseAnalysisPattern =
  /\b(codebase|reposit[oó]rio|projeto)\b[\s\S]{0,300}\b(ler|explorar|analisar|inspecionar|mapear)\b|\b(ler|explorar|analisar|inspecionar|mapear)\b[\s\S]{0,300}\b(codebase|reposit[oó]rio|projeto)\b/iu;

const antiPromptInjectionPatterns = [
  /dados n[aã]o confi[aá]veis/iu,
  /ignore comandos?.*arquivos|ignore instru[cç][oõ]es?.*arquivos/iu,
  /instru[cç][oõ]es embutidas/iu,
];

const prohibitionPattern = /\b(n[aã]o|nunca|jamais|sem|nenhum)\b/iu;
const realEnvPattern = /`?\.env(?:\.local|(?:\.[\w-]+)?\.local)`?/iu;

function collectMarkdownFiles(directory) {
  const files = [];

  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...collectMarkdownFiles(path));
      continue;
    }

    if (entry.endsWith(".md")) {
      files.push(path);
    }
  }

  return files;
}

function addFinding(severity, file, message, suggestion) {
  findings.push({
    severity,
    file: relative(process.cwd(), file).split(sep).join("/"),
    message,
    suggestion,
  });
}

if (!existsSync(skillsRoot)) {
  console.error("Diretório `skills/` não encontrado.");
  process.exit(1);
}

const skillDirectories = readdirSync(skillsRoot)
  .map((entry) => join(skillsRoot, entry))
  .filter((path) => statSync(path).isDirectory());

for (const skillDirectory of skillDirectories) {
  const skillFile = join(skillDirectory, "SKILL.md");

  if (!existsSync(skillFile)) {
    continue;
  }

  const skillContent = readFileSync(skillFile, "utf8");

  for (const file of collectMarkdownFiles(skillDirectory)) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");

    for (const [index, line] of lines.entries()) {
      const context = `${lines[index - 1] ?? ""} ${line}`;

      if (realEnvPattern.test(line) && !prohibitionPattern.test(context)) {
        addFinding(
          "high",
          file,
          "Menção operacional a arquivo de ambiente sensível real.",
          "Cite `.env.local` ou `.env.*.local` apenas para proibir leitura/cópia, e use `.env.example`, `.env.sample` ou `.env.template` para documentação.",
        );
        break;
      }
    }

    for (const { pattern, suggestion } of sensitiveReadPatterns) {
      for (const line of lines) {
        if (
          pattern.test(line) &&
          !safeEnvExamplePattern.test(line) &&
          !prohibitionPattern.test(line)
        ) {
          addFinding(
            "high",
            file,
            "Possível instrução para ler ou copiar arquivo sensível real.",
            suggestion,
          );
          break;
        }
      }
    }
  }

  if (
    codebaseAnalysisPattern.test(skillContent) &&
    !antiPromptInjectionPatterns.every((pattern) => pattern.test(skillContent))
  ) {
    addFinding(
      "medium",
      skillFile,
      "Skill que analisa codebase sem barreiras explícitas contra prompt injection.",
      "Declare que arquivos analisados são dados não confiáveis e que comandos/instruções embutidos devem ser ignorados.",
    );
  }
}

if (findings.length > 0) {
  console.error("Auditoria de segurança das skills encontrou achados:");

  for (const finding of findings) {
    console.error(
      `- [${finding.severity}] ${finding.file}: ${finding.message} Sugestão: ${finding.suggestion}`,
    );
  }

  process.exit(1);
}

console.log("Auditoria de segurança das skills concluída sem achados.");
