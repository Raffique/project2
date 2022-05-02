<template>
    <h2 class="page-header" >Explore</h2>
    <br>
    
    
    <div class="container-fuild">
        
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
    data() {
        return {
          csrf_token: '',
          articles: [],
        };
    },
    created() {
        this.cars();
        this.getCsrfToken();
        
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
                self.articles = data.cars;
            });
        },
    getCsrfToken(){
      //console.log("Logged state",this.$store.state.auth)
      let self = this;
      fetch('/api/csrf-token')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          self.csrf_token = data.csrf_token;
        })
    },
  }  
    }
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