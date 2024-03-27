import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { askChatGPT3_5 } from "../../chatgpt";
import { logger } from "../../logger/logger";

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
  logger.info(
    `command: ${data.name}, question: ${interaction.options.getString("question")}`
  );

  if (!interaction.guild) return;

  const question = interaction.options.getString("question") ?? "";
  await interaction.deferReply();
  const answer = await askChatGPT3_5(question);

  await interaction.editReply(answer);
};
