document.addEventListener("DOMContentLoaded", function () {
  const counterApp = document.getElementById("counter-app");
  let count = 0;
  const countDisplay = document.createElement("p");
  countDisplay.textContent = `Count:${count}`;

  //create increment and decrement buttons
  const incrementButton = document.createElement("button");
  incrementButton.textContent = "Increment";
  const decrementButton = document.createElement("button");
  decrementButton.textContent = "Decrement";

  //add event listeners to the button:
  incrementButton.addEventListener("click", function () {
    count += 1;
    countDisplay.textContent = `Count:${count}`;
  })

  decrementButton.addEventListener("click", function () {
    count -= 1;
    countDisplay.textContent = `Count:${count}`;
  })
  counterApp.appendChild(countDisplay);
  counterApp.appendChild(incrementButton);
  counterApp.appendChild(decrementButton);

})