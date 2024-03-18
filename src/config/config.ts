require("dotenv").config();

export const config = {
  clientId: process.env.BOT_CLIENT_ID ?? "",
  guildId: process.env.BOT_GUILD_ID ?? "",
  token: process.env.BOT_TOKEN ?? "",
};
