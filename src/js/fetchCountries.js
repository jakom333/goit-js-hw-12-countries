import countries from "../templates/countries.hbs";
import countriesList from "../templates/countries-list.hbs";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const container = document.querySelector(".container");
export default {
  fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => markup(data))
      .catch((error) => console.log(error));
  },
};

function markup(data) {
  if (data.length >= 2 && data.length <= 10) {
    container.innerHTML = countriesList(data);
  } else if (data.length > 10) {
    container.innerHTML = "";
    resultMessage(error, "Слишком много стран");
  } else {
    const countryMarkup = data.map((el) => countries(el)).join("");
    container.innerHTML = countryMarkup;
  }
}

function resultMessage(typeInfo, textInfo) {
  typeInfo({
    text: `${textInfo}`,
    delay: 1000,
    closerHover: true,
  });
}
