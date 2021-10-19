var textField = document.getElementById('txtUrl');
console.log(textField);

function irpUrl(textField){
    getElementById("urlDestino").innerHTML("src=('https://www.youtube.com/embed/') + textField");
    console.log(textField);
}