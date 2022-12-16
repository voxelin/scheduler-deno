import { format, getWeekOfMonth, isWeekend } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { Composer } from "grammy";
import { handleLink } from "../extends/functions.ts";
import { show_schedule_keyboard } from "../handlers/dx.ts";

export const school_commands_composer = new Composer();
const zonedTime = utcToZonedTime(new Date(), "Europe/Kiev");

school_commands_composer.command("schedule", async (ctx) => {
    await show_schedule_keyboard(ctx, format(zonedTime, "EEEE"));
});

school_commands_composer.command("link", async (ctx) => {
    if (isWeekend(zonedTime)) {
        return await ctx.reply("Сьогодні вихідний 🥳");
    }
    const raw_data = handleLink();
    const { links, next } = raw_data;
    let { name } = raw_data;
    if (Object.keys(raw_data).length === 0) {
        return ctx.reply("Уроки закінчились, відпочивайте! 🫂");
    }
    const oddWeek = getWeekOfMonth(zonedTime) % 2;
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
            links![0] = `1. <a href="${links![0]}">Чепурна</a>\n2. <a href="${
                links![1]
            }">Дунько</a>`;
            break;
        case "💻 Інформатика":
            links![0] = `1. <a href="${links![0]}">Беднар</a>\n2. <a href="${
                links![1]
            }">Шеремет</a>`;
            break;
        default:
            break;
    }
    if (links?.length != 0) {
        next == true
            ? await ctx.reply(
                `Посилання на наступний урок: <b>${name}</b> \n${links![0]}`,
            )
            : await ctx.reply(
                `Урок <b>${name}</b> вже почався: \n${links![0]}`,
            );
    } else {
        await ctx.reply("На жаль, на урок посилання немає. 🤔");
    }
});

school_commands_composer.on("callback_query", async (ctx) => {
    const day = ctx.callbackQuery.data ?? "Monday";
    await ctx.answerCallbackQuery();
    await show_schedule_keyboard(ctx, day, false);
});
