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
    } else if (req.method === "GET") {
        const url = new URL(req.url);
        if (url.pathname === "/setWebhook") {
            await bot.api.setWebhook(
                `https://${Deno.env.get("DOMAIN")}/${bot.token}`,
            );
            return Response.json({
                status: 200,
                body: "Successfully set webhook.",
            });
        }
    }
    return Response.redirect(`https://${bot.botInfo.username}.t.me`);
});
