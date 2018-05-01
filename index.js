

document.getElementById("countButton").onclick = function() {
    // your code will go here ... 
 var typedText = document.getElementById("textInput").value;

 typedText = typedText.toLowerCase();
// This changes all the letter to lower case.

typedText = typedText.replace(/[^a-z'\s]+/g, "");
// This gets rid of all the characters except letters, spaces, and apostrophes.
// We will learn more about how to use the replace function in an upcoming lesson

letterCounts = {};
for(let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
                          
    // do something for each letter. 
 
 if(letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1;
 } else {
    letterCounts[currentLetter]++;
 }
}
 for(letter in letterCounts) {
    let div1 = document.createElement("div");
    let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    div1.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(div1);
 
}

words = typedText.split(/\s/);
wordCount={};
for(let i=0; i < words.length; i++){
    currentWord= words[i]

    if(wordCount[currentWord]=== undefined) {
        wordCount[currentWord] = 1;
    }else {
        wordCount[currentWord]++;
    }
    }

    for(word in wordCount) {
        let div1 = document.createElement("div");
        let textContent = document.createTextNode('"' + word + "\": " + wordCount[word] + ", ");
        div1.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(div1);

console.log
}




}
