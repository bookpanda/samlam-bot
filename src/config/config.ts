require("dotenv").config();

export const config = {
  BOT_CLIENT_ID: process.env.BOT_CLIENT_ID ?? "",
  BOT_GUILD_ID: process.env.BOT_GUILD_ID ?? "",
  BOT_TOKEN: process.env.BOT_TOKEN ?? "",
  OPENAI_TOKEN: process.env.OPENAI_TOKEN ?? "",
};
