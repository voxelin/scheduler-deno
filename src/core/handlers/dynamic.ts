import { format, getWeekOfMonth } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { Context, InlineKeyboard, Keyboard } from "grammy";
import { books } from "../data/data.ts";
import { list } from "../data/schedule.ts";
export const parseSchedule = (day: string) => {
    const week = getWeekOfMonth(utcToZonedTime(new Date(), "Europe/Kiev")) % 2;
    const time = format(utcToZonedTime(new Date(), "Europe/Kiev"), "HH:mm");
    const current_day = format(
        utcToZonedTime(new Date(), "Europe/Kiev"),
        "EEEE",
    );
    const days_i18n: { [day: string]: string } = {
        Monday: "Понеділок",
        Tuesday: "Вівторок",
        Wednesday: "Середа",
        Thursday: "Четвер",
        Friday: "П'ятниця",
    };
    let message =
        `[🗓️](https://ieljit.lol/${crypto.randomUUID()}) *Графік на* _${
            days_i18n[day]
        }_:\n`;
    const ongoing = (timestart: string, timeend: string) => {
        return time >= timestart && time <= timeend;
    };
    if (day != "Saturday" && day != "Sunday") {
        list[day].forEach((item) => {
            if (ongoing(item.start, item.end) && day == current_day) {
                message += `● `;
            } else {
                message += `○ `;
            }
            switch (item.name) {
                case "📚 Англійська":
                    message +=
                        `_${item.start}_-_${item.end}_ — ${item.name} ([Чепурна](${
                            item.links[0]
                        }) | [Дунько](${item.links[1]}))\n`;
                    break;
                case "💻 Інформатика":
                    message +=
                        `_${item.start}_-_${item.end}_ — ${item.name} ([Беднар](${
                            item.links[0]
                        }) | [Шеремет](${item.links[1]}))\n`;
                    break;
                case "🎨 Мистецтво | 📜 Основи здоров'я":
                    if (week == 0) {
                        message +=
                            `_${item.start}_-_${item.end}_ — [📜 Основи здоров'я](${
                                item.links[1]
                            })\n`;
                    } else {
                        message +=
                            `_${item.start}_-_${item.end}_ — [🎨 Мистецтво](${
                                item.links[0]
                            })\n`;
                    }
                    break;
                case "🌍 Географія | 📜 Історія України":
                    if (week == 0) {
                        message +=
                            `_${item.start}_-_${item.end}_ — [📜 Історія України](${
                                item.links[1]
                            })\n`;
                    } else {
                        message +=
                            `_${item.start}_-_${item.end}_ — [🌍 Географія](${
                                item.links[0]
                            })\n`;
                    }
                    break;
                default:
                    message +=
                        `_${item.start}_-_${item.end}_ — [${item.name}](${item.links})\n`;
            }
        });
    } else {
        message = "❌ *Сьогодні вихідний!*\n";
    }
    return message;
};

export const parseBook = (book: string) => {
    return { file_id: books[book].file_id, url: books[book].url };
};

export const showInlineKeyboard = async (
    ctx: Context,
    day: string,
    reply = true,
) => {
    const keyboard = new InlineKeyboard()
        .text("Понеділок", `Monday`)
        .text("Вівторок", `Tuesday`)
        .text("Середа", `Wednesday`)
        .row()
        .text("Четвер", `Thursday`)
        .text("П'ятниця", `Friday`);
    try {
        if (reply) {
            await ctx.reply(parseSchedule(day), {
                parse_mode: "Markdown",
                reply_markup: keyboard,
                disable_web_page_preview: true,
            });
        } else {
            await ctx.editMessageText(parseSchedule(day), {
                parse_mode: "Markdown",
                reply_markup: keyboard,
                disable_web_page_preview: true,
            });
        }
    } catch {
        await ctx.answerCallbackQuery(
            "Ця форма застаріла. Спробуйте викликати команду знову.",
        );
    }
};

export const shelfKeyboard = new Keyboard()
    .text("📕 Німецька")
    .text("📕 Фізика")
    .text("📕 Хімія")
    .row()
    .text("📕 Біологія")
    .text("📕 Алгебра")
    .text("📕 Геометрія")
    .row()
    .text("📕 Укр. мова")
    .text("📕 Укр. літ")
    .text("📕 Географія")
    .resized()
    .selected()
    .oneTime();
