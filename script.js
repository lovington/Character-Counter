function countCharacters() {
    var inputText = document.getElementById('inputText').value;
    var characterCount = inputText.length;
    document.getElementById('counter').innerHTML = 'Characters: ' + characterCount;
}
