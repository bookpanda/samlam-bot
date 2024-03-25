import { infoPrompt, storyPrompt, systemPrompt, translatePrompt } from ".";

const genInfoPrompt = () => {
  const selectedInfo: string[] = [];
  const count = getRandomNumber(5, 7);
  const usedIndexes = new Set<number>();

  for (let i = 0; i < count; i++) {
    const index = getRandomNumber(0, infoPrompt.info.length - 1);
    if (usedIndexes.has(index)) {
      i--;
      continue;
    }

    usedIndexes.add(index);
    selectedInfo.push(infoPrompt.info[index]);
  }
  usedIndexes.clear();

  return `${infoPrompt.prompt}\n${selectedInfo.join("\n")}`;
};

export const genTranslatePrompt = () => {
  return `${translatePrompt.prompt}\n${translatePrompt.rules.join("\n")}`;
};

export const genSystemPrompt = () => {
  return systemPrompt.prompt;
};

export const genStoryPrompt = () => {
  return `${storyPrompt.prompt}\n${genInfoPrompt()}`;
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
