import { Composer } from "grammy";

export const composer = new Composer();

composer.command("start", (ctx) => {
    ctx.reply("Hello, world!")
})