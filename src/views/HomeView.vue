
<template>

    <div style="text-align:center;">
        <form @submit.prevent="search" id="searchForm" method="POST" style="display:inline-block;">
            <div class="row mb-2">
                <div style="margin: 25px; text-align:center;">
                    <div class="form-group" style="display:inline-block;">       
                        <label for="make">Make</label>
                        <input name="make" placeholder="Enter Make" class="form-control explore-field">
                        
                        
                    </div>
                    <div class="form-group" style="display:inline-block;">
                        <label for="model">Model</label>
                        <input name="model" placeholder="Enter Model" class="form-control explore-field">
                    </div>
                    <button class="btn btn-success" style="display:inline-block;" >Search</button>
                </div>
            </div>
        </form>

        <button class="btn btn-danger" style="display:inline-block; margin:20px; margin-left:40px;"  @click="cars">Clear</button>
    </div>
    
    

    <div class="container-fuild">
        
            <div v-for="article in articles" :key="article" style="display: inline-block; margin: 10px;" >
                <div class="card" style="width:300px; height: 480px; margin:20px; ">
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
      };
  },
  created: function () {
      this.getCsrfToken();
    this.cars();
   
  },
  mounted(){
      this.checklogged();
  },
  methods: {
    view(car_id){
        router.push({name: 'car', params: {car_id: car_id}})
    },
    cars() {
        let self = this;
        fetch('/api/cars', {
            method: 'GET',
            headers: {'X-CSRFToken': this.csrf_token}
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            self.articles = data.cars.slice(-3);
        });
    },
    search(){
            let self = this;
            let searchForm = document.getElementById('searchForm');
            let form_data = new FormData(searchForm);

            fetch("/api/search", {
                method: 'POST',
                body: form_data,
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function (response) {
                
                return response.json();
            })
            .then(function (data) {
                // display a success message
                if (data.files != null){
                    self.articles = data.files;
                    
                }
                else {
                    alert('No matches found!');
                }
                
                
            })
            .catch(function (error) {
                console.log(error)
            });
    },
    checklogged(){
        fetch('/api/loggedIn')
        .then((response) => response.json())
        .then((data) => {
            if (data.id == null){
                localStorage.setItem('logged', 'false');
                router.push('login');
            }
            else{
                localStorage.setItem('logged', 'true');
            }
        })
        .catch((error) => {
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

