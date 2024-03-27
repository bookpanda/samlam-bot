# samlam-bot

> _แซมแลม_ แปลว่า คนชอบพูดสอดแทรก เช่น เมื่อผู้ใหญ่พูดกันก็มักพูดสอดแทรก อย่างว่า เหลียวเห็นหน้าแซมแลมย้านแต่แก่ม ความกินบ่แก่มเจ้า ความเว้าแก่มซู่คน (กลอน). อัางอิง: [esan108.com](https://esan108.com/dict/view/%E0%B9%81%E0%B8%8B%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%A1#google_vignette)

Making a bot with the personality of that one friend who always has something to say without filters.

## Stack

- discordjs
- chatgpt

## Getting Started

### Prerequisites

- 💻
- pnpm 8.7
- node 18
- [discord bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

### Installation

1. Clone this repo
2. Copy `.env.template` and paste it in the same directory as `.env` and fill in the values.
3. Copy `config.example.json` in `./config` and paste it in the same directory as `config.json` and fill in the values.
4. Download dependencies by `pnpm i`

### Running

1. For the first time, run `pnpm deploy-commands` to deploy the commands to the discord server.
2. Run `docker-compose up -d` or `pnpm dev`
