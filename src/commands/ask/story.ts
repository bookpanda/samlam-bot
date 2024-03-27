import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { askChatGPT4 } from "../../chatgpt";
import { genStoryPrompt } from "../../chatgpt/prompts/process";
import { logger } from "../../logger/logger";

export const data = new SlashCommandBuilder()
  .setName("story")
  .setDescription("makes the bot tell a story");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  logger.info(`command: ${data.name}`);

  if (!interaction.guild) return;

  await interaction.deferReply();
  const answer = await askChatGPT4(genStoryPrompt());

  await interaction.editReply(answer);
};
