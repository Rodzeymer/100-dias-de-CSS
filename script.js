var textField = document.getElementById('txtUrl');

textField.addEventListener('keyup', function() {
    document.querySelector('iframe').setAttribute('src', textField.value);
})