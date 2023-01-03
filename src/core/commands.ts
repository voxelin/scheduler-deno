import { Composer } from "grammy";
import { other_commands_composer } from "./commands/other.ts";
import { school_commands_composer } from "./commands/school.ts";
import { shelf_composer } from "./commands/shelf.ts";
export const composer = new Composer();

composer
    .filter((ctx) => {
        return ![1220615061, 953390376].includes(ctx.from?.id ?? 0);
    })
    .use(shelf_composer, other_commands_composer, school_commands_composer);
