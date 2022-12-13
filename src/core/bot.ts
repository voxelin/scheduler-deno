import { Bot } from "grammy";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

export default bot;
