import * as DateFns from 'date-fns'

export const formatForArticle = (date: string) =>
    DateFns.format(new Date(date), 'MMM d,y')

export { DateFns }
