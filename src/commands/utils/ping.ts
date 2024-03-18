import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const ping = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("replies pong");

export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply("pong!");
};
