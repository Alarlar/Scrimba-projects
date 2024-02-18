// document.getElementById("count-el").innerText = 8
// comment everything cmd + /


//  let count = 5 // let count be zero

//  count = count + 10 


//  console.log(count)

// function increment() {

//   console.log("the button was clicke")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()
// countdown()

// function somename() {
//   console.log(42)
// }

// somename()

// let lap1 = 34 //global scope
// let lap2 = 33
// let lap3 = 36

// function logger() {
//   let total = lap1 + lap2 + lap3
//   console.log(total)
//   //console.log(lap1 + lap2 + lap3)
// }
// logger()

// let lapsCompleted = 0;

// function increment() {
//   lapsCompleted = lapsCompleted + 1
// }
// increment()
// increment()
// increment()

// console.log(lapsCompleted)


// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// //console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") //100100

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
  count = count + 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent = saveEl.textContent + countStr
  countEl.textContent = 0
  count = 0
  
  console.log(count)
}