document.getElementById('adicionar').addEventListener('click', function() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var aviso = document.getElementById('aviso');
    
    if (!emailValue) {
        emailInput.style.border = '1px solid red';
        aviso.style.display = 'block';
    } else {
        emailInput.style.border = '';
        aviso.style.display = 'none';
    }
});
