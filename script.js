var textField = document.getElementById('txtUrl').value;


function irpUrl(){   
    var destino = "https://www.youtube.com/embed/" + textField;
    console.log(destino);
    console.log(destino.value);
    console.log(destino.valueOf);
}