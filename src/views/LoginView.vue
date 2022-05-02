<script>
import router from "@/router/index.js";
export default {
    
    data(){
        return {
            csrf_token: ''
        }
    },
    created(){
        this.getCsrfToken();
    },
    methods : {
        register(){
            router.push(`register`)
        },
        login(){

            let loginForm = document.getElementById('loginForm');
            let form_data = new FormData(loginForm);

            fetch("/api/auth/login", {
                method: 'POST',
                body: form_data,
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function (response) {
                
                return response.json();
            })
            .then(function (data) {
                // display a success message
                if (data.status == 200){
                    localStorage.setItem('logged', 'true');
                    router.push('/');
                    
                }
                else if (data.status == 401){
                    alert('invalid username or password');
                }
                
                
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        getCsrfToken() {
            let self = this;
            fetch('/api/csrf-token')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                self.csrf_token = data.csrf_token;
            })
        }
    },
}
</script>

<template>
 <div>
    <h2>Account Login</h2>
    <div class="regform-container">
       <form @submit.prevent="login" id="loginForm" method="POST">
        <div class="grid-container">
            <div class="grid-item">
              <label for="user">Username</label><br>
              <input type="text" id="username" name="username"><br><br>
            </div>
            <div  class="grid-item">
              <label for="pass">Password</label><br>
              <input type="password" id="password" name="password"><br>         
            </div>
            <button class="btn">Login</button>
         </div>
        </form>
    </div>
</div>  
</template>

<style>
  .btn{
        border: 2px solid black;
        padding: 14px 28px;
        font-size: 14px;
        cursor: pointer;
        font-family:Tahoma;
        font-weight: bold;
        position: relative;
        border-radius: 12px;
        background-color:beige;
        }

</style>