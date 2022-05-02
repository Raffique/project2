
<template>
    
    <div :key="user" class="container d-flex justify-content-center align-items-center" >
        <div class="card">
            
            <div class="user text-center">
                <div class="profile"> 
                    <img :src="`/api/uploads/${user.photo}`" class="rounded-circle">
                </div>
                <div class="info">
                    <h4 class="mb-0">{{user.name}}</h4>
                    <span><a href="#">@{{user.username}}</a></span> 
                </div>
            </div>
            
            <div class="bio text-center">

                <div  class="about text-muted">
                    <p>{{user.biography}}</p>
                </div>
                
                
                <div class="follownumbers ">
                    <div>
                        <h5 class="mb-0">Email</h5> <span>{{user.email}}</span>
                    </div>
                    <div>
                        <h5 class="mb-0">Location</h5> <span>{{user.location}}</span>
                    </div>
                    <div>
                        <h5 class="mb-0">Joined</h5> <span>{{user.date_joined}}</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div class="container-fuild">
            <h2>Favourites</h2>
            <div v-for="article in articles" :key="article" style="display: inline-block; margin: 10px;" >
                <div class="card" style="width:300px; height: 480px;">
                    <img  style="width: 300px; height: 200px;" :src="`/api/uploads/${article.photo.split('/t')[0]}`" alt="Card image">
                    
                        <h5 class="card-title">{{ article.title }}</h5>


                    <div class="card-body">
                        <h5 class="card-title">{{ article.year }} {{article.make}} <div class="pricetag">${{ article.price }}</div> </h5>
                        <span class="card-text addresstag"> {{ article.model}}</span>
                        <br>
                        
                    </div>
                    <div @click="view(article.id)" style="text-decoration-line: none;">
                        <div class="card-footer footertag">
                            View more details
                        </div>
                    </div>

                    
               </div>
            </div>
            
    </div>
</template>

<script>
import router from "@/router/index.js";
 export default {
  data(){
      return {
          articles: [],
          csrf_token: '',
          user: Object,
      };
  },
  created: function () {
    this.getCsrfToken();
    this.favs();
   
  },
  mounted(){
  },
  methods: {
    view(car_id){
        router.push({name: 'car', params: {car_id: car_id}})
    },
    favs() {
            let self = this;
            fetch('/api/user', {
                method: 'GET',
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                self.user = data.user;
            })
            .catch(function (error){
                console.log(error);
            });

            fetch('/api/user/favourites', {
                method: 'GET',
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                self.articles = data.favs;
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

 };
</script>

<style>

    .card {
        width: 550px;
        border: 1px solid gray;
        border-radius: 15px;
    /*display: grid;
    grid-template-rows: 1fr 1fr;*/
    }



    .user {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: gray;
    }

    .info{
        color: white;
        padding-top: 15px;
        padding-bottom: 30px;
    }

    .profile img {
        height: 120px;
        width: 120px;
        margin-top: 2px
    }

    .profile {
        padding-top: 50px;
        top: -50px;
        left: 38%;
        
        
    }

    .bio{
        
        padding: 30px;
    }

    .about{
        margin-bottom: 15px;
    }

    .follownumbers{
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    .follownumbers > div {
        width: 100px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .follow {
        margin-top: 30px;
        margin-bottom: 30px;
        background-color: limegreen;
        color: white;
        border: none;
        border-radius: 10px;
        padding-left: 20px;
        padding-right: 20px;
        height: 35px;
        width: 150px;
    }

    .follow:hover{
        background-color: green;
    }

    .follow:active{
        background-color: darkgreen;
    }

    .btn-container{
        display: grid;
        grid-template-columns: 350px 350px 350px;
        padding: 350px;
      
    }
    
    .route-btn{
        border: 2px solid rgba(255, 255, 255, 0.445);
        background-color:rgba(255, 255, 255, 0.445);
        padding: 14px 28px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-family:Tahoma;
        font-weight: bold;
       
        
    }

    .route-btn:hover{
         top: -10px;
         position: relative;
         font-size: 25px;
    }
    body{
        height: 100%;
    }

    #logout{
        text-align:right;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        right: 30px;
        position: relative;
    }

    .nav-link{
         color: rgba(15, 13, 13, 0.904);
    }

    .addresstag{
    margin: 0;
    padding: 0;
    color: grey;
}



.pricetag{
    display: inline-block;
    width: fit-content;
    background-color:rgb(0, 153, 0); 
    color: white; 
    padding: 8px; 
    border-radius: 15px; 
    font-size: 12px; 
    margin-top: 5px; 
    margin-bottom: 5px;
    margin-left:40px;
}

.typetag{
    margin-left: 10px;
    width: fit-content;
    background-color:rgb(245, 159, 0); 
    color: white; 
    padding: 8px; 
    border-radius: 15px; 
    font-size: 12px; 
    margin-top: 5px; 
    margin-bottom: 5px
}

.footertag{
    background-color: rgb(15, 179, 255);
    color: white;
    text-align: center;
}

.footertag:hover{
    background-color: rgb(3, 153, 199);
}

.footertag:active{
    background-color: rgb(2, 117, 151);
}

</style>

