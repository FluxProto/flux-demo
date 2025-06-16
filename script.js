
const texts = ["Flux maps emotion to motion.", "Built for humans and AIs.", "Speak the unspeakable."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type(){
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}());
