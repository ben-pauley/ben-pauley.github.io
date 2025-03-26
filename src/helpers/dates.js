
const milliSecondsInAYear = 1000 * 60 * 60 * 24 * 365.25

export const getYearsSinceDate = (day, month, year, currentDate) => {
    const inputDate = new Date(year, month - 1, day)
    const difference = currentDate - inputDate
    return Math.floor(difference / milliSecondsInAYear)
}