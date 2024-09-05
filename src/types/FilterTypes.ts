export const filterNames = ['name', 'username', 'email', 'phone', 'none'] as const
export type FilterType = (typeof filterNames)[number];


export type FilterIndexType = 'name' | 'username' | 'email' | 'phone';

