import * as DateFns from 'date-fns'

export const formatForHome = (date: string) =>
    DateFns.format(new Date(date), 'MMM d,y')

export { DateFns }
