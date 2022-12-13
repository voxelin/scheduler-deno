import { Bot } from "grammy";
import { composer } from "./commands.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");
await bot.init();
bot.use(composer);

export default bot;
