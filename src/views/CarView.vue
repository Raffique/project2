<template>
     <div :key="article" style="margin: 25px;">
        <div  style="width: 1400px; height: 480px; border: 2px solid grey;">
            <div style="display: flex;" >
                <div style=" width: 680px; height: 480px; ">
                    <button class="clickers" style="position:absolute; top:300px; margin-left:15px;" @click="change_pic(-1)" >&#8249;</button>
                    <button class="clickers" style="position:absolute; top:300px; margin-left:605px;" @click="change_pic(1)" >&#8250;</button>
                    <img style="width: 678px; height: 478px;"  :src="article.img" alt="Image of Property">
                    
                </div>
                <div class="" style=" width: 680px; height: 480px; padding: 20px;">
                    <div class="">
                        <h5 class="">{{article.year}} {{article.make}}</h5>
                        <div>
                            <div  style="display: inline-block;">{{ article.model }}</div>
                        </div>
                        <p style="margin: 10px; max-height: 210px; margin-top:50px;">{{article.description}}</p>
                        <div>
                            <div style="display: inline-block; margin: 10px;">Color {{article.colour}} </div>
                            <div style="display: inline-block; margin: 10px;">Body Type {{article.car_type}} </div>
                        </div>
                        <div style="margin: 5px;" >
                            <span style="display: inline-block; margin: 10px;">Price {{article.price}}  </span>
                            <span style="display: inline-block; margin: 10px;">Transmission {{article.transmission}}  </span>
                        </div>
                        
                        <button class="btn btn-success" style="margin: 10px;" @click="email()">Email Owner</button>
                        <button id="heart" style="
                            display: inline-block;  
                            margin: 10px; 
                            margin-left:450px; 
                            width: 40px; 
                            height: 40px; 
                            border-radius:20px; 
                            font-size: 20px;" 
                            @click="like_this_car(article.id)"
                            :style="{color: like}">
                            &#10084;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router/index.js";
export default {
    props: ['car_id'],
    data(){
        return {
            csrf_token: '',
            article: Object,
            like : 'black',
        };
    },
    mounted(){
        
    },
    created(){
        this.getCsrfToken();
        this.car();
        
    },
    methods: {
        email(){
            alert('Owner currently unavailable!');
        },
        change_pic(num){
            

            if (this.article.idx == this.article.len - 1 && num == 1){
                this.article.img = "/api/uploads/" + this.article.photo.split('/t')[0];
                this.article.idx = 0;
            }
            else if (this.article.idx == 0 && num == -1){
                this.article.idx = this.article.len - 1;
                this.article.img = "/api/uploads/" + this.article.photo.split('/t')[this.article.idx];
            }
            else{
                this.article.idx = this.article.idx + num;
                this.article.img = "/api/uploads/" + this.article.photo.split('/t')[this.article.idx];
            }
            
        },
        car() {
            let self = this;
            fetch(`/api/cars/${this.car_id}`, {
                method: 'GET',
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                self.article = data.car;
                self.article.len = data.car.photo.split('/t').length; 
                self.article.idx = 0;
                self.article.img = "/api/uploads/" + data.car.photo.split('/t')[0];
                self.article.liked = data.liked;

                if (self.article.liked){
                    console.log('red');
                    self.like = "red";
                }
                else{
                    console.log('gray');
                    self.like = "black";
                }

            }).catch(function (error) {
                console.log(error);
            });
        },
        like_this_car(car_id){
            let self = this;
            fetch(`/api/cars/${car_id}/favourite`, {
                method: "POST",
                headers: {'X-CSRFToken': this.csrf_token}
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.status == 200){
                    alert("You liked this car!");
                    self.like = "red";
                }
                else if (data.status == -200){
                    alert('You unliked this car');
                    self.like = "black";
                }
            }).catch(function (error) {
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
.pricetag{
    width: fit-content;
    background-color:rgb(0, 153, 0); 
    color: white; 
    padding: 8px; 
    border-radius: 15px; 
    font-size: 12px; 
    margin-top: 5px; 
    margin-bottom: 5px
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

.clickers{
    width: 50px;
    height: 50px;
    font-size: 30px;
    border-radius: 30px;
    line-height: 40px;
    opacity: 0.5;
}

.clickers:hover{
    opacity: 0.9;
}
.clickers:active{
    opacity: 1;
}
</style>

