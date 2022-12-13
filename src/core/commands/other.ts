import { Composer } from "grammy";

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
        "📚 *Команди:*\n" +
            "`/start` - Початкова команда.\n" +
            "`/about` - Базова інформація про бота.\n" +
            "`/help` - Список команд.\n" +
            "`/cancel` - Скасувати поточну дію.\n" +
            "`/shelf` - Завантажити книгу з приватної галереї.\n" +
            "`/schedule` - Дізнатись розклад уроків та посилання на них.\n" +
            "`/link` - Дізнатись посилання на наступний/теперішній урок.\n",
        {
            parse_mode: "Markdown",
        },
    );
});
