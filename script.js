
// valores inciales
let secretNumber = Math.ceil(Math.random() * 20)

let score = 20
let highscore = 0

const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.guess')

console.log(`El campo score tiene el valor ${scoreField}`)
console.log(`El campo highscore tiene el valor ${highscoreField}`)
console.log(`El campo numberField tiene el valor ${numberField}`)