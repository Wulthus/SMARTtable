import { filterNames } from "../types/FilterTypes";

export const isValidFilter = function(filter: any): boolean {
    return filterNames.includes(filter);
}