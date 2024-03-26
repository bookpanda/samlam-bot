import { Events, Message } from "discord.js";
import { askChatGPT3_5, translate } from "../chatgpt";
import { noContentPrompt } from "../chatgpt/prompts";

export const name = Events.MessageCreate;

export const execute = async (message: Message) => {
  if (message.author.bot) return false;

  if (
    message.content.includes("@here") ||
    message.content.includes("@everyone")
  )
    return false;

  const botId = message.mentions.roles.first()?.tags?.botId;
  if (!botId) return false;
  if (botId !== message.client.user!.id) return false;

  const rawContent = message.content;
  const regex = /<@&\d+>/g;
  const content = rawContent.replace(regex, "").trim();

  if (content === "") {
    const reply = await translate(noContentPrompt);
    await message.channel.send(reply);
    return;
  }

  const reply = await askChatGPT3_5(content);
  await message.channel.send(reply);
};
