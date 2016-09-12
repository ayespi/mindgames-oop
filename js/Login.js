function Login(){

}
        function submitLogin() {
            var button = document.getElementById('submitButton').disabled = true;
            var data = new FormData();
            data.append("email", document.getElementById('email').value);
            data.append("password", document.getElementById('password').value);
            fetch("/login/verifyLogin", {
                method: 'POST',
                credentials: 'same-origin',
                body: data
            }).then(function (response) {
                return response.text()
            }).then(function (login) {
                if (login == 1) {
                    alert("It looks like there was a problem with your email or password");
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('email').focus();
                    var button = document.getElementById('submitButton').disabled = false;

                } else if (login == 2) {
                    alert("Your account has been deactivated. Please contact help@teach-now.com with any questions.");
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('email').focus();
                    var button = document.getElementById('submitButton').disabled = false;
                } else {
                    window.location = window.location.origin + "/home";
                }
            });
        }

        function checkSubmit(e, el) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) { //Enter keycode
                submitLogin();
            }
        }
