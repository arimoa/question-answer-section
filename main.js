const btnEl = document.getElementById("btn");
const patternEl = document.getElementById("pattern");
const wordsEl = document.getElementById("words");
const resultEl = document.getElementById("result");
let patternValue;
let wordsValue;

patternEl.addEventListener("change", (e) => {
  patternValue = e.target.value;
  resultEl.innerHTML = "Result: ";
  console.log(patternValue);
});

wordsEl.addEventListener("change", (e) => {
  wordsValue = e.target.value;
  resultEl.innerHTML = "Result: ";
});

btnEl.addEventListener("click", () => {
  if (patternValue.length > 300 || patternValue.length < 1) {
    return alert("Pattern is not valid");
  }
  if (wordsValue.length > 3000 || wordsValue.length < 1) {
    return alert("Words-list is not valid");
  }
  if (wordsValue[0] == " " || wordsValue[wordsValue.length - 1] == " ") {
    return alert.log(
      "the start point or end point of Word-list can not be white space"
    );
  }
  for (let index = 0; index < wordsValue.length - 1; index++) {
    if (wordsValue[index] + wordsValue[index + 1] == "  ") {
      return alert("two white space can not be places near each other");
    }
  }

  if (/[A-Z]/.test(wordsValue)) {
    return alert("Word-list can not contain uppercase characters");
  }
  if (/[A-Z]/.test(patternValue)) {
    return alert("Pattern can not contain uppercase characters");
  }

  wordGame(patternValue, wordsValue);
});

var wordGame = function (p, reshte) {
  let spacePositions = [0];
  for (let j = 0; j < reshte.length; j++) {
    if (reshte[j] == " ") {
      spacePositions = [...spacePositions, j];
    }
  }

  let words = [];
  for (let i = 0; i < spacePositions.length; i++) {
    if (i == 0) {
      words = [
        ...words,
        reshte.substring(spacePositions[i], spacePositions[i + 1]),
      ];
    } else {
      words = [
        ...words,
        reshte.substring(spacePositions[i] + 1, spacePositions[i + 1]),
      ];
    }
  }

  let sames = [];
  let same = [];
  let r_sames = [];
  let r_same = [];

  for (let i = 0; i < p.length; i++) {
    same = [i];
    if (sames.toString().indexOf(i) == -1) {
      for (let j = i + 1; j < p.length; j++) {
        if (p[i] == p[j]) {
          same = [...same, j];
        }
      }
      sames = [...sames, same];
    }
  }

  for (let i = 0; i < words.length; i++) {
    r_same = [i];
    if (r_sames.toString().indexOf(i) == -1) {
      for (let j = i + 1; j < words.length; j++) {
        if (words[i] == words[j]) {
          r_same = [...r_same, j];
        }
      }
      r_sames = [...r_sames, r_same];
    }
  }

  if (JSON.stringify(r_sames) == JSON.stringify(sames)) {
    resultEl.innerHTML = "Result: Correct";
  } else {
    resultEl.innerHTML = "Result: Incorrect";
  }
};
