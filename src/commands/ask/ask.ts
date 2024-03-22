import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { askChatGPT } from "../../chatgpt";

export const data = new SlashCommandBuilder()
  .setName("ask")
  .setDescription("asks the bot a question")
  .addStringOption((option) =>
    option
      .setName("question")
      .setDescription("The question to ask the bot")
      .setRequired(true)
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  if (!interaction.guild) return;

  const question = interaction.options.getString("question") ?? "";
  await interaction.deferReply();
  const answer = await askChatGPT(question);

  await interaction.editReply(answer);
};
