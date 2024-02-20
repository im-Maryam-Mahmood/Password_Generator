const upperSet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '1234567890';
const symbolSet = '!@#$%^&*()/'

const passBox = document.getElementById('pass-box');
const totalchar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
const genratePassword = ( password = "") =>{
    if (upperInput.checked){
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked){
        password += getRandomData(lowerSet)
    }

    if (numberInput.checked){
        password += getRandomData(numberSet)
    }
 
    if (upperInput.checked){
        password += getRandomData(symbolSet)
    }

    if(password.length < totalchar.value){
        return genratePassword(password);
    }
    passBox.innerText=trunacateString(password, totalchar.value);

}
genratePassword();

function trunacateString(str, num){
    if(str.length  > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else
    return str;
}

document.getElementById('btn').addEventListener(
    "click", 
    function(){
        genratePassword();
    }
)

genratePassword();