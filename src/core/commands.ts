import { format, getWeekOfMonth, isWeekend } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { Composer } from "grammy";
import { process } from "https://deno.land/std@0.167.0/node/process.ts";
import bot from "./bot.ts";
import { handleLink } from "./extends/functions.ts";
import { shelf_inline, show_keyboard_sch } from "./types/dx.ts";
export const composer = new Composer();

composer.command("schedule", async (ctx) => {
    const date = utcToZonedTime(new Date(), "Europe/Kiev");
    await show_keyboard_sch(ctx, format(date, "EEEE"));
});

composer.command("about", async (ctx) => {
    await ctx.reply(
        "Цей бот був створений для зручного доступу до розкладу занять та посилань на заняття.\n" +
            "Розробник: @voxelin",
    );
});

composer.filter((ctx) => ctx.from?.id == 5187696616).command(
    "botinfo",
    async (ctx) => {
        await ctx.reply(`
<code>@${(await bot.api.getMe()).username}</code> 🤖
├ <b>Uptime:</b> <code>${Math.round(process.uptime())}sec</code>
├ <b>Memory usage:</b> <code>${
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
        }MB</code>
├ <b>Host:</b> <code>deta.sh</code>
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

composer.command("cancel", async (ctx) => {
    await ctx.reply("Дія скасована.", {
        reply_markup: {
            remove_keyboard: true,
        },
        reply_to_message_id: ctx.message?.message_id,
    });
});

composer.command("link", async (ctx) => {
    const date = utcToZonedTime(new Date(), "Europe/Kiev");
    if (isWeekend(date)) {
        return await ctx.reply("Сьогодні вихідний 🥳");
    }
    const _d = await handleLink();
    const { urls, next } = _d;
    let { name } = _d;
    if (Object.keys(_d).length === 0) {
        return ctx.reply("Уроки закінчились, відпочивайте! 🫂");
    }
    const oddWeek = getWeekOfMonth(date) % 2;
    switch (name) {
        case "🎨 Мистецтво | 📜 Основи здоров'я":
            if (oddWeek == 0) {
                name = "📜 Основи здоров'я";
            } else {
                name = "🎨 Мистецтво";
            }
            break;
        case "🌍 Географія | 📜 Історія України":
            if (oddWeek == 0) {
                name = "📜 Історія України";
            } else {
                name = "🌍 Географія";
            }
            break;
        case "📚 Англійська":
            urls![0] = `1. <a href="${urls![0]}">Чепурна</a>\n2. <a href="${
                urls![1]
            }">Дунько</a>`;
            break;
        case "💻 Інформатика":
            urls![0] = `1. <a href="${urls![0]}">Беднар</a>\n2. <a href="${
                urls![1]
            }">Шеремет</a>`;
            break;
        default:
            break;
    }
    if (urls?.length != 0) {
        next == true
            ? await ctx.reply(
                `Посилання на наступний урок: <b>${name}</b> \n${urls![0]}`,
            )
            : await ctx.reply(`Урок <b>${name}</b> вже почався: \n${urls![0]}`);
    } else {
        await ctx.reply("На жаль, на урок посилання немає. 🤔");
    }
});

composer.command("shelf", async (ctx) => {
    await ctx.reply("📚 Оберіть книгу:", {
        reply_markup: shelf_inline,
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message?.message_id,
    });
});

composer.command("start", async (ctx) => {
    await ctx.reply("Працюю на благо учнів ліцею 🤖\nАвтор: @voxelin", {
        parse_mode: "Markdown",
    });
});
