var textField = document.getElementById('txtUrl').value;


function irpUrl(){   
    var vamos = document.getElementById("urlDestino")
    .src = "https://www.youtube.com/embed/" + textField;
    console.log(vamos.src.value);
}