var textField = document.getElementById('txtUrl');


function irpUrl(){   
    var vamos = document.getElementById("urlDestino")
    .src = "https://www.youtube.com/embed/" + textField.value;
    console.log(vamos.src.value);
}