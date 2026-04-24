// type MyName = 'David' // literal type (The data must literally match a specific value)
// type Message = number | boolean | MyName

const message1 = 'hello'
const message2: string = message1

function print (data: string) {
  console.log('data', data)
}

console.log(message1)
console.log(message1)
console.log(message1)