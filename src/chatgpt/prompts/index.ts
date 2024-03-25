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

const readJSONFile = <T>(filename: string): T => {
  const currentDir = process.cwd();
  const filePath = path.join(currentDir, "config", filename);
  const rawData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(rawData);
  return jsonData;
};

export const systemPrompt: SystemPrompt =
  readJSONFile<SystemPrompt>("system.json");

export const translatePrompt: TranslatePrompt =
  readJSONFile<TranslatePrompt>("translate.json");

export const infoPrompt: InfoPrompt = readJSONFile<InfoPrompt>("info.json");

export const storyPrompt: StoryPrompt = readJSONFile<StoryPrompt>("story.json");
