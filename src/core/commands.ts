import { Composer } from "grammy";
import { other_commands_composer } from "./commands/other.ts";
import { school_commands_composer } from "./commands/school.ts";
import { shelf_composer } from "./commands/shelf.ts";
export const composer = new Composer();

composer.use(school_commands_composer);
composer.use(other_commands_composer);
composer.use(shelf_composer);
