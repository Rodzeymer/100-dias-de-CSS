var textField = document.getElementById('txtUrl');
var irPara = getElementById("urlDestino");
console.log(textField);
console.log(txtUrl);

console.log(irPara);
console.log(urlDestino);

function irpUrl(){   
    document.getElementById("urlDestino").src = "https://www.youtube.com/embed/" + textField;
    console.log(textField);
}