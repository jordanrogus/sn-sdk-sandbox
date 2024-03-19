import { format } from 'date-fns'

export const dayOfWeek = function () {
    return format(new Date(), 'eeee');
}