var textField = document.getElementById('txtUrl');
console.log(textField);


function irpUrl(){   
    var destino = "https://www.youtube.com/embed/" + textField;
    console.log(destino);
    console.log(destino.value);
    console.log(destino.valueOf);
}