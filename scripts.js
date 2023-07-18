

let nameOne = prompt("Digite aqui o nome do primeiro aluno:")
let gradeOne = Number(prompt("A nota da sua primeira prova:"))
let gradeTwo = Number(prompt("A nota da sua segunda prova:"))

let nameTwo = prompt("Digite aqui o nome do segundo aluno:")
let gradeOne1 = Number(prompt("A nota da sua primeira prova:"))
let gradeTwo2 = Number(prompt("A nota da sua segunda prova:"))

let nameThree = prompt("Digite aqui o nome do terceiro aluno:")
let gradeOne3 = Number(prompt("A nota da sua primeira prova:"))
let gradeTwo4 = Number(prompt("A nota da sua segunda prova:"))

let result = gradeOne + gradeTwo
let div = result / 2
let average = div >= 7

let result1 = gradeOne1 + gradeTwo2
let div1 = result / 2
let average1 = div >= 7

let result2 = gradeOne3 + gradeTwo4
let div2 = result / 2
let average2 = div >= 7

if(average) {
    alert(`A média do aluno(a) foi de: ${div} \n Parabéns, ${nameOne}! Você foi aprovado(a) no concurso!` )
} else {
    alert(`A média do aluno(a) foi de: ${div} \n Não foi dessa vez, ${nameOne}! Tente novamente!`)
}

if(average1) {
    alert(`A média do aluno(a) foi de: ${div1} \n Parabéns, ${nameTwo}! Você foi aprovado(a) no concurso!` )
} else {
    alert(`A média do aluno(a) foi de: ${div1} \n Não foi dessa vez, ${nameTwo}! Tente novamente!`)
}

if(average2) {
    alert(`A média do aluno(a) foi de: ${div2} \n Parabéns, ${nameThree}! Você foi aprovado(a) no concurso!` )
} else {
    alert(`A média do aluno(a) foi de: ${div2} \n Não foi dessa vez, ${nameThree}! Tente novamente!`)
}