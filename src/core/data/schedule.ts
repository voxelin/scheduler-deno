import { links } from "./data.ts";
export const schedule: {
    [key: string]: {
        start: string;
        end: string;
        urls: string[];
        name: string;
        sent?: boolean;
    }[];
} = {
    Monday: [
        {
            start: "08:15",
            end: "09:00",
            urls: [links.German],
            name: "💬 Німецька",
        },
        {
            start: "09:15",
            end: "10:00",
            urls: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "10:15",
            end: "11:00",
            urls: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            urls: [links.Chemistry],
            name: "🧪 Хімія (Код: 242295)",
        },
        {
            start: "12:10",
            end: "12:55",
            urls: [links.Algebra],
            name: "📐 Алгебра",
        },
        {
            start: "13:05",
            end: "13:50",
            urls: [links.Ukrainian],
            name: "📚 Українська мова",
        },
        {
            start: "13:55",
            end: "14:40",
            urls: [],
            name: "🏃‍♂️ Фізична культура",
        },
    ],
    Tuesday: [
        {
            start: "08:15",
            end: "09:00",
            urls: [links.FLit],
            name: "📚 Зарубіжна література",
        },
        {
            start: "09:15",
            end: "10:00",
            urls: [links.Art, links.Biology],
            name: "🎨 Мистецтво | 📜 Основи здоров'я",
        },
        {
            start: "10:15",
            end: "11:00",
            urls: [links.Geometry],
            name: "📐 Геометрія",
        },
        {
            start: "11:15",
            end: "12:00",
            urls: [links.UkrainianLit],
            name: "📚 Українська література",
        },
        {
            start: "12:10",
            end: "12:55",
            urls: [links.History],
            name: "📜 Історія України",
        },
        {
            start: "13:05",
            end: "13:50",
            urls: [links.Ukrainian],
            name: "📚 Українська мова",
        },
        {
            start: "13:55",
            end: "14:40",
            urls: [links.Geography],
            name: "🌍 Географія",
        },
        { start: "14:50", end: "15:35", urls: [], name: "🔧 Трудове навчання" },
    ],
    Wednesday: [
        {
            start: "08:15",
            end: "09:00",
            urls: [links.History],
            name: "📜 Всесвітня Історія",
        },
        {
            start: "09:15",
            end: "10:00",
            urls: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "10:15",
            end: "11:00",
            urls: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            urls: [links.Chemistry],
            name: "🧪 Хімія (Код: 242295)",
        },
        {
            start: "12:10",
            end: "12:55",
            urls: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "13:05",
            end: "13:50",
            urls: [links.InformaticsA, links.InformaticsB],
            name: "💻 Інформатика",
        },
        {
            start: "13:55",
            end: "14:40",
            urls: [links.Biology],
            name: "🦠 Біологія",
        },
        {
            start: "14:50",
            end: "15:35",
            urls: [],
            name: "🏃‍♂️ Фізична культура",
        },
    ],
    Thursday: [
        {
            start: "08:15",
            end: "09:00",
            urls: [links.Algebra],
            name: "📐 Алгебра",
        },
        {
            start: "09:15",
            end: "10:00",
            urls: [links.FLit],
            name: "📚 Зарубіжна література",
        },
        {
            start: "10:15",
            end: "11:00",
            urls: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "11:15",
            end: "12:00",
            urls: [links.Law],
            name: "📜 Правознавство",
        },
        {
            start: "12:10",
            end: "12:55",
            urls: [links.German],
            name: "💬 Німецька",
        },
        {
            start: "13:05",
            end: "13:50",
            urls: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "13:55",
            end: "14:40",
            urls: [links.Geography, links.History],
            name: "🌍 Географія | 📜 Історія України",
        },
        { start: "14:50", end: "15:35", urls: [], name: "🔧 Трудове навчання" },
    ],
    Friday: [
        {
            start: "08:15",
            end: "09:00",
            urls: [],
            name: "🏃‍♂️ Фізична культура",
        },
        {
            start: "09:15",
            end: "10:00",
            urls: [links.UkrainianLit],
            name: "📚 Українська література",
        },
        {
            start: "10:15",
            end: "11:00",
            urls: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            urls: [links.Biology],
            name: "🦠 Біологія",
        },
        {
            start: "12:10",
            end: "12:55",
            urls: [links.Geometry],
            name: "📐 Геометрія",
        },
        {
            start: "13:05",
            end: "13:50",
            urls: [links.InformaticsA, links.InformaticsB],
            name: "💻 Інформатика",
        },
    ],
};
