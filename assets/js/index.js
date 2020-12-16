//global states
let currentData = {};
let currentLanguage = "English";

//fethcing initial data
function fetchData() {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js"
    )
    .then(async (res) => {
      //changing the format of the string
      let splitString = res.data.split("NYTD.render_section_front(");
      let slicedString = splitString[1].slice(0, -2);

      //converting to JSON
      currentData = JSON.parse(slicedString);
      // for(let count=0; count)
      console.log(currentData);
    })
    .catch((err) => {
      console.log(err);
    });
}

//change language
function changeLanguage() {
  const martian = document.getElementById("mt");
  const english = document.getElementById("en");

  if (currentLanguage == "English") {
    currentLanguage = "Martian";
    english.classList.remove("active-lang");
    martian.classList.add("active-lang");
  } else {
    currentLanguage = "English";
    martian.classList.remove("active-lang");
    english.classList.add("active-lang");
  }
}
