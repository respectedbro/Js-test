"use strict"

const title = 'Проект'
let screens = 'Простые, Сложные, Интерактивные'
const screenPrice = 500
const rollback = 80
let fullPrice = 5000
const adaptive = false


console.log(typeof title)
console.log(screens.length)
console.log(`“Стоимость
верстки
экранов ${screenPrice}
рублей / долларов / гривен / юани” и Стоимость
разработки
сайта ${fullPrice}
рублей / долларов / гривен / юани”`)
screens.toLowerCase()

screens = screens.split( ' ')
console.log(screens)

fullPrice = fullPrice * (rollback/100)
console.log(fullPrice)