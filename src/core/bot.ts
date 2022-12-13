import { composer } from "./commands.ts";
import { CustomClient } from "./extends/bot.ts";

const bot = new CustomClient(Deno.env.get("BOT_TOKEN") || "");

await bot.init();

bot.use(composer);

export default bot;
