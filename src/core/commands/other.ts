import { Composer } from "grammy";
import process from "https://deno.land/std@0.167.0/node/process.ts";
import bot from "../bot.ts";

export const other_commands_composer = new Composer();

other_commands_composer.command("start", async (ctx) => {
    await ctx.reply("Працюю на благо учнів ліцею 🤖\nАвтор: @voxelin", {
        parse_mode: "Markdown",
    });
});

other_commands_composer.command("about", async (ctx) => {
    await ctx.reply(
        "Цей бот був створений для зручного доступу до розкладу занять та посилань на заняття.\n" +
            "Розробник: @voxelin",
    );
});

other_commands_composer.filter((ctx) => ctx.from?.id == 5187696616).command(
    "botinfo",
    async (ctx) => {
        await ctx.reply(`
<code>@${(await bot.api.getMe()).username}</code> 🤖
├ <b>Uptime:</b> <code>${Math.round(process.uptime())}sec</code>
├ <b>Memory usage:</b> <code>${
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
        }MB</code>
├ <b>Host:</b> <code>deno.land serverless!</code>
├ <b>Endpoint:</b> <code>https://endpoint.blackvoxel.space</code>
├ <b>Node.js:</b> <code>${process.version}</code>
├ <b>Pending endpoint updates:</b> <code>${
            (await bot.api.getWebhookInfo()).pending_update_count - 1
        }</code>
└ <b>Commands:</b> <code>${
            Object.getOwnPropertyNames(Object.getPrototypeOf(this)).length
        }</code>`);
    },
);

other_commands_composer.command("cancel", async (ctx) => {
    await ctx.reply("Дія скасована.", {
        reply_markup: {
            remove_keyboard: true,
        },
        reply_to_message_id: ctx.message?.message_id,
    });
});

other_commands_composer.command("help", async (ctx) => {
    await ctx.reply(
        "📚 <b>Команди:</b>\n" +
        "`/start` - Початкова команда.\n" +
        "`/about` - Базова інформація про бота.\n" +
        "`/help` - Список команд.\n" +
        "`/cancel` - Скасувати поточну дію.\n" +
        "`/shelf` - Завантажити книгу з приватної галереї.\n" +
        "`/schedule` - Дізнатись розклад уроків та посилання на них.\n" +
        "`/link` - Дізнатись посилання на наступний/теперішній урок.\n"
    );
});