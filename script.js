var textField = document.getElementById('txtUrl');
console.log(textField);

function irpUrl(){
    getElementById("urlDestino").innerHTML("src=('https://www.youtube.com/embed/') + textField");
    console.log(textField);
}