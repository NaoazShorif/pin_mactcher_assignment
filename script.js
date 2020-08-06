// generate random number
const lessThan4 = document.getElementById('min-digits');

const generateNumber = document.getElementById('generate-number');
document.getElementById('generate-pin').addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() *(9999 - 1000 + 1)) + 1000;
    generateNumber.value = randomNumber;
    lessThan4.style.display = "none";
});

const notMatched = document.getElementById('not-matched');
const displayNumber = document.getElementById('number-display');

// display numbers
function takeInput(id){
    if(displayNumber.value.length < 4){
        const displayNumberString = displayNumber.value.toString();
        const newNumberString = id.toString();
        displayNumber.value = parseInt(displayNumberString + newNumberString);
        lessThan4.style.display = "none";
    }

// reset button
    if(id == 'C'){
        displayNumber.value = '';
        notMatched.style.display = "none";
    }
}
        
// undo button
document.getElementById("undo").addEventListener('click', function(){
    if(Math.floor(displayNumber.value / 10) == 0){
        displayNumber.value = '';
    }
    else{
        displayNumber.value = Math.floor(displayNumber.value / 10);
    }
    notMatched.style.display = "none"; // to avoid any bug
});

//submit button & chances-left auto update
let leftChances = parseInt(document.getElementById('chances-left').innerText);

const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener('click', function(){
    if(displayNumber.value.length == 4 && leftChances > 0){
        if(displayNumber.value == generateNumber.value){
            document.getElementById('matched').style.display = "block";
            notMatched.style.display = "none";
        }
        else{
            notMatched.style.display = "block";
            
            if(leftChances > 0){
                document.getElementById('chances-left').innerText = leftChances - 1;
                leftChances = parseInt(document.getElementById('chances-left').innerText);
            }
       }
    }
    if(displayNumber.value.length <4){
        lessThan4.style.display = "block";
    }
});