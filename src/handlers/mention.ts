import { Message } from "discord.js";
import { askChatGPT3_5, translate } from "../chatgpt";
import { noContentPrompt } from "../chatgpt/prompts";
import { logger } from "../logger/logger";

export const mentionHandler = async (message: Message) => {
  logger.info(`mentionHandler: ${message.content}`);

  if (
    message.content.includes("@here") ||
    message.content.includes("@everyone")
  )
    return false;

  const rawContent = message.content;
  const regex = /<@&\d+>/g;
  const content = rawContent.replace(regex, "").trim();
  logger.info(`mentionHandler actual content: ${content}`);

  if (content === "") {
    const reply = await translate(noContentPrompt);
    await message.channel.send(reply);
    return;
  }

  const reply = await askChatGPT3_5(content);
  await message.channel.send(reply);
};
