import { format, isWeekend } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { list } from "../data/schedule.ts";

const zonedTime = utcToZonedTime(new Date(), "Europe/Kiev");

export const handleLink = () => {
    const day = format(zonedTime, "EEEE");
    const time = format(zonedTime, "HH:mm");
    let _next = false;
    let _name = "";
    let _links: string[] = [];
    let _sent = false;
    if (!isWeekend(zonedTime)) {
        for (let i = 0; i < list[day].length; i++) {
            if (time >= list[day][list[day].length - 1].end) {
                return {};
            }
            if (
                time >= list[day][i].start && time <= list[day][i].end
            ) {
                _sent = list[day][i].sent ?? false;
                _links = list[day][i].links;
                _name = list[day][i].name;
                list[day][i].sent = true;
                break;
            }
            if (
                time >= list[day][i].end &&
                time <= list[day][i + 1].start
            ) {
                _sent = list[day][i + 1].sent ?? false;
                _links = list[day][i + 1].links;
                _name = list[day][i + 1].name;
                _next = true;
                list[day][i + 1].sent = true;
                break;
            }
        }
    } else {
        return {};
    }
    return { links: _links, name: _name, next: _next, sent: _sent };
};
