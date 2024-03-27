import { Message } from "discord.js";
import { askChatGPT3_5 } from "../chatgpt";
import { logger } from "../logger/logger";

export const samlamHandler = async (message: Message) => {
  logger.info(`samlamHandler: ${message.content}`);

  const rawContent = message.content;
  const regex = /<@&\d+>/g;
  const content = rawContent.replace(regex, "").trim();

  const reply = await askChatGPT3_5(content);
  await message.channel.send(reply);
};
