/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // break

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tld = [".org", ".com", ".pt", ".cat", ".dog"];

  for (let value1 of pronoun) {
    for (let value2 of adj) {
      for (let value3 of noun) {
        for (let value4 of tld) {
          console.log(value1 + value2 + value3 + value4);
        }
      }
    }
  }
};
