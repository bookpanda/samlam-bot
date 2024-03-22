import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { askChatGPT } from "../../chatgpt";
import { tellStory } from "../../chatgpt/prompts/tellStory";

export const data = new SlashCommandBuilder()
  .setName("story")
  .setDescription("makes the bot tell a story");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  if (!interaction.guild) return;

  await interaction.deferReply();
  const answer = await askChatGPT(tellStory);

  await interaction.editReply(answer);
};
