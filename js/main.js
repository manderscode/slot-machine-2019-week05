/*
click on button
three sections, each sections has 5 items
each section does a loopy thing that chooses a number
the three numbers from those section must match to win the bet( we will code bet later)
*/

// option + shft + F = the prettier extension //

// const gamble = document.querySelector(".gamble"); - Shey Delete
const slots = Array.from(document.querySelectorAll(".slot"));

// gamble.addEventListener("click", spinWheel); - Shey Delete 

const box1 = document.querySelector(".box1"); 
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");


document.querySelector("form").addEventListener("submit",spinWheel);

function spinWheel(event) {
    // this stops the form from refreshing the page when it gets submitted b/c that is the default behavior of forms
    event.preventDefault()
  for (let slot of slots) {
    slot.innerText = Math.ceil(Math.random() * 5);
  }
  const a = box1.innerText;
  const b = box2.innerText;
  const c = box3.innerText;
  // if ( a === b && b === c){
  //     console.log('winner')
  // }
  updateMoney(a === b && b === c);
}

function updateMoney(isWon) {
  const totalAmount = document.querySelector(".totalAmount");
  const betAmount = document.querySelector('input[name="bet"]:checked').value;

  // .totalAmount & "bet" cacatenated

  if (isWon) {
    totalAmount.innerText = Number(totalAmount.innerText) + Number(betAmount);
  } else {
    totalAmount.innerText = totalAmount.innerText - betAmount;
  }
}

/*
when gamble is pressed we call on the function spinwheel
then 
*/

// let a = Math.ceil(Math.random() * 5)
// let b = Math.ceil(Math.random() * 5)
// let c = Math.ceil(Math.random() * 5)
// document.querySelector('#slot1').innerText = a
// document.querySelector('#slot2').innerText = b
// document.querySelector('#slot3').innerText = c
// didWeWin()


