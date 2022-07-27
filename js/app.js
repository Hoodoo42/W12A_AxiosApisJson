function callAxios(details) {
  axios
    .request({
      url: `https://dog.ceo/api/breeds/image/random`,
    })
    .then(successFunction)
    .catch(failureFunction);
}

function successFunction(response) {
  document.body.insertAdjacentHTML(`beforeend`, `<img src="${response[`data`][`message`]}" alt="">`);
}

function failureFunction(error) {
  document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
}

let button = document.getElementById(`button`);
button.addEventListener(`click`, callAxios);
