//callAxios function will start a request to the api with the chosen url, and call for either a success or failure function depending on the status

function callAxios(details) {
  axios
    .request({
      url: `https://dog.ceo/api/breeds/image/random`,
    })
    .then(successFunction)
    .catch(failureFunction);
}

// the success function will display a new random dog image provided by the api everytime the button is clicked
function successFunction(response) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `<img src="${response[`data`][`message`]}" alt="">`
  );
}
// the failurefunction will display "error" if there was any issue in getting the api request
function failureFunction(error) {
  document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
}

// Starting with grabbing the element, here by its id, and adding an eventListener that will listen for the button click and start the callAxios function
let button = document.getElementById(`button`);
button.addEventListener(`click`, callAxios);
