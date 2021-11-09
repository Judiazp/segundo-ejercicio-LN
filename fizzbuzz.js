const result = document.getElementById('result')
const elements = document.getElementById('array')
const button = document.getElementById('new-array')

let array = [10,12,15,23,123,53,56,4,5,3] 

const fizzBuzz = ( array )=> {
    return array.map(element => {
        if ( element % 3 === 0 && element % 5 === 0) {
            return `FizzBuzz`
        } else if (element % 5 === 0 || element.toString().includes(5)) {
            return 'Buzz'
        } else if (element % 3 === 0 || element.toString().includes(3)) {
            return 'Fizz'
        } else {
            return element
        }
    })
}

//Mostrando los elementos del array y el resultado

elements.innerHTML= `[ ${array} ]`
result.innerHTML = fizzBuzz(array)

//Generando un nuevo arreglo

button.addEventListener('click', () => {
    array = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
    elements.innerHTML = `[ ${array} ]`
    result.innerHTML = fizzBuzz(array)
})

