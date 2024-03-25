import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { askChatGPT4 } from "../../chatgpt";
import { genStoryPrompt } from "../../chatgpt/prompts/process";

export const data = new SlashCommandBuilder()
  .setName("story")
  .setDescription("makes the bot tell a story");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  if (!interaction.guild) return;

  await interaction.deferReply();
  const answer = await askChatGPT4(genStoryPrompt());

  await interaction.editReply(answer);
};
