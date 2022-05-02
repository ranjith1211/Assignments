 async function register(){
        let signup_data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            username: document.getElementById('username').value,
            mobile: document.getElementById('mobile').value,
            description: document.getElementById('description').value,
        };

        signup_data = JSON.stringify(signup_data);

        let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

        let response = await fetch(reg_api, {
            method: "POST",

            body:signup_data,

            headers: {
                "Content-Type": "application/json",
            },
        });

        let data = await response.json();

        console.log(data);
    }

    async function login(){

        var username = document.getElementById('login-username').value;

        let api = `https://masai-api-mocker.herokuapp.com/auth/login`;

        let login_data = {
            username: document.getElementById('login-username').value,
            password: document.getElementById('login-password').value,
        }

        login_data = JSON.stringify(login_data);

        let res = await fetch(api, {
            method: "POST",

            body: login_data,

            headers: {
                "Content-Type": "application/json",
            }
        });

        let data = await res.json();
        console.log(data);
        getProfile(username, data.token);
    }

    async function getProfile(username, token){

       let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

       let res = await fetch(api, {

           headers: {
               "Content-Type" : "application/json",

               Authorization: `Bearer ${token}`
           }
       });
       let data = await res.json();
       localStorage.setItem("user", JSON.stringify(data.username));
       window.location.href = "question1.html";
    }