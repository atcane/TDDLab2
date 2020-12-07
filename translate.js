function translate(text) {
  if (text === null);

  // convert each word to lowercase before translating
  const lowercase = text.toLowerCase();

  // word starts with a vowel - add “way” onto the ending
  let vowels = ["a", "e", "i", "o", "u"];

  let newText = "";
  text = text.split("");

  let firstLetter = text[0];

  if (vowels.includes(firstLetter)) {
    text = text.join("");
    newText = text + "way";
    return newText;
    
  } else {
    // word starts with a consonant...add “ay” to the end of the word
    while (vowels.includes(text[0]) === false) {
      console.log(text);
      // remove the first item of the array 
      firstLetter = text.shift();
      // push consonant to the end of the string
      text.push(firstLetter);
    }
    let newText2 = text.join("") + "ay";
    return newText2;
  }
}
