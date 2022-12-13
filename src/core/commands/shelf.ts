import { Composer } from "grammy";
import { shelf_inline, show_book } from "../types/dx.ts";

export const shelf_composer = new Composer();
shelf_composer.command("shelf", async (ctx) => {
    await ctx.reply("📚 Оберіть книгу:", {
        reply_markup: shelf_inline,
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message?.message_id,
    });
});

shelf_composer.on("message", async (ctx) => {
    if (ctx.message?.text?.startsWith("📕 ")) {
        try {
            const book = ctx.message.text.slice(3);
            const bookdata = show_book(book);
            await ctx.reply(`📕 <b><a href="${bookdata.url}">${book}</a></b>:`, {
                disable_web_page_preview: true,
                reply_markup: { remove_keyboard: true },
            });
            await ctx.replyWithDocument(bookdata.file_id);
        } catch (e) {
            await ctx.reply("Невідома книга!");
        }
    }
})