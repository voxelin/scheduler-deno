import { webhookCallback } from "grammy";
import { serve } from "http";
import bot from "./core/bot.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
    if (req.method === "POST") {
        const url = new URL(req.url);
        if (url.pathname.slice(1) === bot.token) {
            try {
                return await handleUpdate(req);
            } catch (err) {
                console.error(err);
            }
        }
    }
    return Response.redirect(`https://${bot.botInfo.username}.t.me`)
});
