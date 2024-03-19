import dayjs from 'dayjs'

export const currentISO8601Date = function () {
    return dayjs().format();
}