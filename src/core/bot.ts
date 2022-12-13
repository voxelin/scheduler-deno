import { Bot } from "grammy";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");
await bot.init();

export default bot;
