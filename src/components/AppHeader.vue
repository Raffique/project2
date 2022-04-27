<script>
import { RouterLink } from "vue-router";
export default {
  data(){
    return {
      logged : false,
    };
  },
  mounted(){
    this.check_logged_in();
  },
  created(){
        
    },
  methods : {
    check_logged_in(){

      if (localStorage.getItem("login") == "true"){
        this.logged = true;
        return true
      }
      else{
        this.logged = false;
        return false
      }

    },
    login(){
      this.$router.push("login")
    },
    logout(){
      this.$router.push("logout")
    },
    register(){
      this.$router.push("register")
    }
  }
}
</script>

<style>
/* Add any component specific styles here */
</style>

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
          <div v-if="logged">
            <div class="nav-link" @click="logout">Logout</div>
          </div>
          <div v-else>
            <div class="nav-link" @click="register">Register</div>
            <div class="nav-link" @click="login">Login</div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

