const init = () => {
  const inputForm = document.querySelector("form"); //create a variable to easier select the form

  inputForm.addEventListener("submit", (event) => {
    //add an event listener to the event, in this case, the submit button
    event.preventDefault(); //prevent the page from reloading
    const input = document.querySelector("input#searchByID"); //select the input, (#2 in the form children)

    //console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json()) //retreive data from json file
      .then((data) => {
        //push data into our function
        //console.log(data);
        title.innerText = data.title; //change the values of the section below to reflect the selected movie
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init); //wait for dom to load
