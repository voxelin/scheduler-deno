import { Bot, BotConfig, Context } from "grammy";
import { autoRetry } from "grammy/autoretry";
import { hydrateReply, parseMode, type ParseModeFlavor } from "grammy/pm";

export type CustomContext = ParseModeFlavor<Context> & Context;

export class CustomClient<C extends CustomContext = CustomContext>
    extends Bot<C> {
    constructor(token: string, options?: BotConfig<C>) {
        super(token, options);
    }

    public async init() {
        await super.init();
        this.api.config.use(autoRetry());
        this.use(hydrateReply<Context>);
        this.api.config.use(parseMode("HTML"));
    }
}
