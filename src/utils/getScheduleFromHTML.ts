import { Lecture } from "../types/Lecture";

type TableData = [string, string, string, string, string[], string, string, string, string];

function getScheduleFromHTML(input: string): Lecture[] {
    const getContentAfterLastTable = (input: string) => {
        const pattern = /<table[^>]*>/gi;
        const matches = input.match(pattern);
        if (matches && matches.length > 0) {
            const lastMatch = matches[matches.length - 1];
            const lastIndex = input.lastIndexOf(lastMatch);
            return input.slice(lastIndex + lastMatch.length).trim();
        }
        return '';
    };

    const removeAllClasses = (input: string) => input.replace(/class='[^']*'/gi, '');

    const removeAllStyles = (input: string) => input.replace(/style='[^']*'/gi, '');

    const tagsToLowercase = (input: string) => input.replace(/<[^>]*>/gi, match => match.toLowerCase());

    const removeSpacesInsideTags = (input: string) => input.replace(/<[^>]*>/gi, match => match.replace(/\s/g, ''));

    const removeFirstTr = (input: string) => input.replace(/<tr>[\s\S]*?<\/tr>/, '').trim();

    const removeGarbage = (input: string) => input.replace(/<\/div>|<\/body>|<\/html>/gi, '');

    const removeAllUnnecessarySpaces = (input: string) => input.replace(/\s{2,}/g, ' ');

    const getTableData = (input: string): TableData[] => {
        const rows = input.split('<tr>').slice(1);
        return rows.map(row => {
            const a = row.split('<td>');
                  a.shift();
            const columns = a.map(column => column.replace('</td>', '').replace('</tr>', '').trim());
            const courses = columns[4].split('<br>');
            if(courses.length === 1 && courses[0] === '') courses.pop();
            return [
                columns[0],
                columns[1],
                columns[2],
                columns[3],
                courses,
                columns[5],
                columns[6],
                columns[7],
                columns[8],
            ];
        });
    };

    const formatTableData = (input: TableData[]): Lecture[] => input.map(row => {
        const [date, id, time, room, groups, lecturer, subject, type, comment] = row;
        return {
            date,
            time,
            class: id,
            room,
            groups,
            lecturer,
            subject,
            type,
            comment,
        };
    });

    const a = getContentAfterLastTable(input);
    const b = removeAllClasses(a);
    const c = removeAllStyles(b);
    const d = tagsToLowercase(c);
    const e = removeSpacesInsideTags(d);
    const f = removeFirstTr(e);
    const g = removeGarbage(f);
    const h = removeAllUnnecessarySpaces(g);
    const i = getTableData(h);
    const j = formatTableData(i);

    return j;
}

export default getScheduleFromHTML;
