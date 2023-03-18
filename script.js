// get the buttons and sections
const notesBtn = document.querySelector('.notes-btn');
const clockBtn = document.querySelector('.clock-btn');
const calculatorBtn = document.querySelector('.calculator-btn');
const homeBtn = document.querySelector('.home-button');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

// hide sections 2 and 3 initially
section2.style.display = 'none';
section3.style.display = 'none';
section4.style.display = 'none';

// add event listeners to buttons
notesBtn.addEventListener('click', () => {
  section1.style.display = 'none'; // hide section 1
  section2.style.display = 'block'; // show section 2
  section3.style.display = 'none'; // hide section 3
  section4.style.display = 'none'; // hide section 4
});

clockBtn.addEventListener('click', () => {
  section1.style.display = 'none'; // hide section 1
  section2.style.display = 'none'; // hide section 2
  section3.style.display = 'block'; // show section 3
  section4.style.display = 'none'; // hide section 4
});

calculatorBtn.addEventListener('click', () => {
    section1.style.display = 'none'; // hide section 1
    section2.style.display = 'none'; // hide section 2
    section3.style.display = 'none'; // show section 3
    section4.style.display = 'block'; // hide section 4
  });

// add event listener to home button to show section 1
homeBtn.addEventListener('click', () => {
  section1.style.display = 'block'; // show section 1
  section2.style.display = 'none'; // hide section 2
  section3.style.display = 'none'; // hide section 3
  section4.style.display = 'none'; // hide section 4
});

function rotateHands() {
    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate the degree of rotation for each hand
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const secondDegree = (seconds / 60) * 360 + 90;
  
    // Update the transform property of each hand
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegree}deg)`;
  
    // Adjust the second hand transform to rotate from the center of the clock
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transformOrigin = 'bottom center';
    secondHand.style.transform = `rotate(${secondDegree}deg) translateX(-50%)`;
  }
  
  // Call the rotateHands function every second
  setInterval(rotateHands, 1000);

  //calculator
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.input-screen');

// add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const lastChar = screen.textContent.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // check if the clicked button is an operator
    if (operators.includes(button.textContent)) {
      // check if the last character on the screen is an operator
      if (operators.includes(lastChar)) {
        // if it is, replace it with the clicked operator
        screen.textContent = screen.textContent.slice(0, -1) + button.textContent;
      } else {
        // if not, append the clicked operator
        screen.textContent += button.textContent;
      }
    } else {
      // if the clicked button is not an operator, add it to the screen
      if (screen.textContent === '0') {
        screen.textContent = button.textContent;
      } else {
        screen.textContent += button.textContent;
      }
    }
  });
});

const equalButton = document.querySelector('.button-equal');
equalButton.addEventListener('click', () => {
  screen.textContent = eval(screen.textContent);
});

const clearButton = document.querySelector('.button-clear');

clearButton.addEventListener("click", function() {
  screen.textContent = "0";
});