<script>
import { RouterLink } from "vue-router";
export default {
  data(){
    return {
      //logged : false,
      logged: localStorage.logged == 'true' ? true : false,
    };
  },
  mounted(){
  },
  created(){
        
    },
  watch: {
    '$route': 'reinitialize',
  },
  methods : {
    reinitialize(){
      this.logged = localStorage.logged == 'true' ? true : false;
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
        <a class="navbar-brand" href="/">United Auto Sales</a>
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

            <li v-if="logged" class="nav-item" style="">
              <RouterLink class="nav-link" to="/cars/new">Add Car</RouterLink>
            </li>

            <li v-if="logged" class="nav-item">
              <RouterLink class="nav-link" to="/explore">Explore</RouterLink>
            </li>

            <li v-if="logged" class="nav-item">
              <RouterLink class="nav-link" to="/user">My Profile</RouterLink>
            </li>
            
          </ul>
            <RouterLink v-if="logged" style="color: white;" to="/logout">Logout</RouterLink>
            <div v-else>
              <RouterLink style="color: white; margin:10px;" to="register">Register</RouterLink>
              <RouterLink style="color: white; margin:10px;" to="login">Login</RouterLink>
            </div>
            
        </div>
      </div>
      
    </nav>
  </header>
</template>

