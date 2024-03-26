import * as fs from "fs";
import path from "path";

export interface SystemPrompt {
  prompt: string;
}

export interface InfoPrompt {
  prompt: string;
  info: string[];
}

export interface StoryPrompt {
  prompt: string;
}

export interface TranslatePrompt {
  prompt: string;
  rules: string[];
}

interface Config {
  info: InfoPrompt;
  story: StoryPrompt;
  system: SystemPrompt;
  translate: TranslatePrompt;
  noContent: string;
}

const readJSONFile = <T>(filename: string): T => {
  const currentDir = process.cwd();
  const filePath = path.join(currentDir, "config", filename);
  const rawData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(rawData);
  return jsonData;
};

const config: Config = readJSONFile<Config>("config.json");

export const systemPrompt = config.system;
export const translatePrompt = config.translate;
export const infoPrompt = config.info;
export const storyPrompt = config.story;
export const noContentPrompt = config.noContent;
