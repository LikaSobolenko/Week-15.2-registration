function check() {
    let name = document.getElementById("first");
    let lastname = document.getElementById("last");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let password = document.getElementById("password");

    document.getElementById('errorMessage').innerHTML = '';

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Ваше Имя не заполнено<br />';
    }

    if (lastname.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Ваша Фамилия не заполнена<br />';
    }

    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Ваш email не заполнен<br />';
    }

    if (tel.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Ваш Номер телефона не заполнен<br />';
    }

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Ваш Пароль не заполнен<br />';
    }
    if (name.value != '' && lastname.value != '' && email.value != '' && tel.value != '' && password.value != '') {
        alert(`Добро пожаловать, ${document.getElementById("first").value}!`)
    }


}