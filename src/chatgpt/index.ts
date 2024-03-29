import OpenAI from "openai";
import { config } from "../config/config";
import { GPT35TURBO, GPT4TURBOPREVIEW } from "./models";
import { genSystemPrompt, genTranslatePrompt } from "./prompts/process";

const { OPENAI_TOKEN } = config;

const openai = new OpenAI({ apiKey: OPENAI_TOKEN });

const generate = async (
  model: string,
  userPrompt: string,
  systemPrompt?: string
) => {
  let completion;
  if (systemPrompt)
    completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        { role: "user", content: userPrompt },
      ],
      model: model,
    });
  else
    completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userPrompt }],
      model: model,
    });

  return completion.choices[0].message.content ?? "";
};

export const askChatGPT3_5 = async (prompt: string) => {
  const answer = await generate(GPT35TURBO, prompt, genSystemPrompt());

  const translatedAnswer = await generate(
    GPT35TURBO,
    answer,
    genTranslatePrompt()
  );

  return translatedAnswer;
};

export const askChatGPT4 = async (prompt: string) => {
  const answer = await generate(GPT4TURBOPREVIEW, prompt, genSystemPrompt());

  const translatedAnswer = await generate(
    GPT4TURBOPREVIEW,
    answer,
    genTranslatePrompt()
  );

  return translatedAnswer;
};

export const translate = async (prompt: string) => {
  const translatedAnswer = await generate(
    GPT35TURBO,
    prompt,
    genTranslatePrompt()
  );

  return translatedAnswer;
};
