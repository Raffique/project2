<script>
import router from "@/router/index.js";
export default {
data(){
    return {

    };
},
mounted(){
    fetch("/api/auth/logout", {

        })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.status == 200){
            localStorage.setItem('logged', 'false');
            alert("Logged Out!")
            router.push('login')
            
          }
        })
}
}
</script>

<template>
    
</template>
