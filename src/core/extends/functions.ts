import { format, isWeekend } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { schedule } from "../data/schedule.ts";

const localdate = utcToZonedTime(new Date(), "Europe/Kyiv");

export const handleLink = () => {
    const day = format(localdate, "EEEE");
    const time = format(localdate, "HH:mm");
    let _next = false;
    let _name = "";
    let _urls: string[] = [];
    let _sent = false;
    if (!isWeekend(localdate)) {
        for (let i = 0; i < schedule[day].length; i++) {
            if (time >= schedule[day][schedule[day].length - 1].end) {
                return {};
            }
            if (
                time >= schedule[day][i].start && time <= schedule[day][i].end
            ) {
                _sent = schedule[day][i].sent ?? false;
                _urls = schedule[day][i].urls;
                _name = schedule[day][i].name;
                schedule[day][i].sent = true;
                break;
            }
            if (
                time >= schedule[day][i].end &&
                time <= schedule[day][i + 1].start
            ) {
                _sent = schedule[day][i + 1].sent ?? false;
                _urls = schedule[day][i + 1].urls;
                _name = schedule[day][i + 1].name;
                _next = true;
                schedule[day][i + 1].sent = true;
                break;
            }
        }
    } else {
        return {};
    }
    return { urls: _urls, name: _name, next: _next, sent: _sent };
};
