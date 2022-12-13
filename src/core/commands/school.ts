import { format, getWeekOfMonth, isWeekend } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { Composer } from "grammy";
import { handleLink } from "../extends/functions.ts";
import { show_keyboard_sch } from "../types/dx.ts";

export const school_commands_composer = new Composer();

school_commands_composer.command("schedule", async (ctx) => {
    const date = utcToZonedTime(new Date(), "Europe/Kiev");
    await show_keyboard_sch(ctx, format(date, "EEEE"));
});

school_commands_composer.command("link", async (ctx) => {
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

school_commands_composer.on("callback_query", async (ctx) => {
    const day = ctx.callbackQuery.data ?? "Monday";
    await ctx.answerCallbackQuery();
    await show_keyboard_sch(ctx, day, false);
});