import {getYearsSinceDate} from "./dates";


describe('dates helpers', () => {

    describe('getYearsSinceDate', () => {

        test('should return 26 if current date is exactly 26 years after given date', () => {
            const day = 26
            const month = 3
            const year = 1999
            const currentDate = new Date(2025, 3-1, 26)
            const expected = 26
            expect(getYearsSinceDate(day, month, year, currentDate)).toEqual(expected)
        })

        test('should return 25 if current date is exactly 26 years minus one day after given date', () => {
            const day = 26
            const month = 3
            const year = 1999
            const currentDate = new Date(2025, 3-1, 25)
            const expected = 25
            expect(getYearsSinceDate(day, month, year, currentDate)).toEqual(expected)
        })
    })
})