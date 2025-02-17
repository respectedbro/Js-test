let lang = 'ru'

const daysRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const daysEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


if (lang === 'ru') {
   console.log(daysRu)
} else {
   console.log(daysEn)
}

switch (lang) {
   case 'ru':
      console.log(daysRu)
      break
   case "en":
      console.log(daysEn)
      break
}


const namePerson = 'Артём';
let person = namePerson === 'Артём' ? 'дир' : namePerson === 'Александр' ? 'препод' : 'студ'
console.log(person)
