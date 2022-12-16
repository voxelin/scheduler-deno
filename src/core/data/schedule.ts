import { links } from "./data.ts";
export const list: {
    [key: string]: {
        start: string;
        end: string;
        links: string[];
        name: string;
        sent?: boolean;
    }[];
} = {
    Monday: [
        {
            start: "08:15",
            end: "09:00",
            links: [links.German],
            name: "💬 Німецька",
        },
        {
            start: "09:15",
            end: "10:00",
            links: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "10:15",
            end: "11:00",
            links: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            links: [links.Chemistry],
            name: "🧪 Хімія (Код: 242295)",
        },
        {
            start: "12:10",
            end: "12:55",
            links: [links.Algebra],
            name: "📐 Алгебра",
        },
        {
            start: "13:05",
            end: "13:50",
            links: [links.Ukrainian],
            name: "📚 Українська мова",
        },
        {
            start: "13:55",
            end: "14:40",
            links: [],
            name: "🏃‍♂️ Фізична культура",
        },
    ],
    Tuesday: [
        {
            start: "08:15",
            end: "09:00",
            links: [links.FLit],
            name: "📚 Зарубіжна література",
        },
        {
            start: "09:15",
            end: "10:00",
            links: [links.Art, links.Biology],
            name: "🎨 Мистецтво | 📜 Основи здоров'я",
        },
        {
            start: "10:15",
            end: "11:00",
            links: [links.Geometry],
            name: "📐 Геометрія",
        },
        {
            start: "11:15",
            end: "12:00",
            links: [links.UkrainianLit],
            name: "📚 Українська література",
        },
        {
            start: "12:10",
            end: "12:55",
            links: [links.History],
            name: "📜 Історія України",
        },
        {
            start: "13:05",
            end: "13:50",
            links: [links.Ukrainian],
            name: "📚 Українська мова",
        },
        {
            start: "13:55",
            end: "14:40",
            links: [links.Geography],
            name: "🌍 Географія",
        },
        { start: "14:50", end: "15:35", links: [], name: "🔧 Трудове навчання" },
    ],
    Wednesday: [
        {
            start: "08:15",
            end: "09:00",
            links: [links.History],
            name: "📜 Всесвітня Історія",
        },
        {
            start: "09:15",
            end: "10:00",
            links: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "10:15",
            end: "11:00",
            links: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            links: [links.Chemistry],
            name: "🧪 Хімія (Код: 242295)",
        },
        {
            start: "12:10",
            end: "12:55",
            links: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "13:05",
            end: "13:50",
            links: [links.InformaticsA, links.InformaticsB],
            name: "💻 Інформатика",
        },
        {
            start: "13:55",
            end: "14:40",
            links: [links.Biology],
            name: "🦠 Біологія",
        },
        {
            start: "14:50",
            end: "15:35",
            links: [],
            name: "🏃‍♂️ Фізична культура",
        },
    ],
    Thursday: [
        {
            start: "08:15",
            end: "09:00",
            links: [links.Algebra],
            name: "📐 Алгебра",
        },
        {
            start: "09:15",
            end: "10:00",
            links: [links.FLit],
            name: "📚 Зарубіжна література",
        },
        {
            start: "10:15",
            end: "11:00",
            links: [links.Physics],
            name: "🔬 Фізика",
        },
        {
            start: "11:15",
            end: "12:00",
            links: [links.Law],
            name: "📜 Правознавство",
        },
        {
            start: "12:10",
            end: "12:55",
            links: [links.German],
            name: "💬 Німецька",
        },
        {
            start: "13:05",
            end: "13:50",
            links: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "13:55",
            end: "14:40",
            links: [links.Geography, links.History],
            name: "🌍 Географія | 📜 Історія України",
        },
        { start: "14:50", end: "15:35", links: [], name: "🔧 Трудове навчання" },
    ],
    Friday: [
        {
            start: "08:15",
            end: "09:00",
            links: [],
            name: "🏃‍♂️ Фізична культура",
        },
        {
            start: "09:15",
            end: "10:00",
            links: [links.UkrainianLit],
            name: "📚 Українська література",
        },
        {
            start: "10:15",
            end: "11:00",
            links: [links.EnglishA, links.EnglishB],
            name: "📚 Англійська",
        },
        {
            start: "11:15",
            end: "12:00",
            links: [links.Biology],
            name: "🦠 Біологія",
        },
        {
            start: "12:10",
            end: "12:55",
            links: [links.Geometry],
            name: "📐 Геометрія",
        },
        {
            start: "13:05",
            end: "13:50",
            links: [links.InformaticsA, links.InformaticsB],
            name: "💻 Інформатика",
        },
    ],
};
