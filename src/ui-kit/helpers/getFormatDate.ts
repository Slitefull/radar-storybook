import { formatISO } from "date-fns";


export const getFormatDate = (date: Date): string => formatISO(date).substring(0, 10);
