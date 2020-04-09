import { languages } from './nls';
export declare class DateService {
    private static _local;
    locale: languages;
    constructor();
    setCustomNls(val: {
        weekdays: string[];
        months: string[];
    }): void;
    getDaysOfWeek(): string[];
    getMonths(): string[];
    doesStartFromMonday(): boolean;
    getYears(): any[];
    createDateList(currentDate: Date): Date[];
}
