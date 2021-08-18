export const Status = {
    pending: 'Pending',
    fullfiled: 'Fullfiled',
    rejected: 'Rejected'
} as const

export type Status = typeof Status[keyof typeof Status]
