import "./styles.css";
import fetchCountries from "./js/fetchCountries.js";
import debounce from "lodash.debounce";
const input = document.querySelector("input");

input.addEventListener("input", debounce(search, 500));

function search(event) {
  fetchCountries.fetchCountries(event.target.value);
}
