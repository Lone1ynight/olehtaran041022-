export const getRandomNumber = (min: number, max: number): number => {
    const numbers: number[] = []
    const number = Math.floor(min + Math.random() * (max - min))
    if (numbers.includes(number)) return getRandomNumber(min, max)
    else {
        numbers.push(number)
        return number
    }
}