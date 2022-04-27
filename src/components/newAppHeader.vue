<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Lab 7</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
          </ul>
          <div v-if="logged_in">
            <RouterLink class="nav-link" to="/logout">Logout</RouterLink>
          </div>
          <div v-else>
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data(){
    return {
      logged_in : false,
      csrf_token: ''
    };
  },
  mounted(){
    this.getCsrfToken();
    this.check_logged_in();
  },
  created(){
        
    },
  methods : {
    check_logged_in(){

      fetch("/api/auth/checklogin", {
        method: 'GET',
        headers: {'X-CSRFToken': this.csrf_token}
      })
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        if (data.login == true){
          this.logged_in = true;
        }
        else{
          this.logged_in = false;
        }
      })
      .catch(function (error){
        console.log(error);
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
  }
}
</script>

<style>
/* Add any component specific styles here */
</style>