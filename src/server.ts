import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { webhookCallback } from "https://deno.land/x/grammy@v1.12.0/mod.ts";
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
            await bot.api.setWebhook(`https://${Deno.env.get("DOMAIN")}/${bot.token}`);
            return {
                status: 200,
                body: "Successfully set webhook.",
            };
        }
    }
    return Response.redirect(`https://${bot.botInfo.username}.t.me`)
});
