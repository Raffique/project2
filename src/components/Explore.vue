<template>
    <h2 class="page-header" >Explore</h2>
    <br>
    <div id="explore-card" class="cardleft">
        <form @submit.prevent="search" id="searchForm" method="POST">
            <div class="row mb-2">
                <div class="col-auto">
                    <div class="form-group">       
                        <label for="make">Make</label>
                        <input name="make" placeholder="Enter Make" class="form-control explore-field">
                        <input name="model" placeholder="Enter Model" class="form-control explore-field">
                        <br>
                        <button type="button" class="btn btn-success" >Search</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div v-if="carsearch != [] " >
        <div class="container_view">
        <div v-for="car in carsearch" :key="car.id">
            <div class = "gridview">
                <div class="text-left">
                    <img class="img-top" v-bind:src= "'/uploads/' + car.photo">
                    <div class="car-body">
                        <h5 class="card-title">{{ car.year }} {{ car.make }}</h5>
                        <p>{{ car.model }}</p>
                        <div class="cost">
                            {{ car.price }}        
                        </div>
                    </div>  

                    <RouterLink class="Details" v-bind:to="'/cars/' + car.id + '/'+ this.$store.state.uid">
                        <div class="cardfooter">
                            View more details
                        </div>
                    </RouterLink>
                </div>
            </div> 
            </div>
            </div>
    </div>
   
    
</template>

<script>
    export default {
    data() {
        return {
          csrf_token: '',
          link: '',
          carsearch:[],
        };
    },
    created() {
        this.getCars();
        this.getCsrfToken();
        
    },
    methods: {
        search(){
            this.carsearch = []
            let searchForm = document.getElementById('searchForm');
            let form_data = new FormData(searchForm);
             fetch('/api/search',{
                method: 'POST', 
                body: form_data,
                headers: {'X-CSRFToken': this.csrf_token}
             })
            .then((response) => response.json())
            .then((data) => {
               console.log("came to data") 
               console.log(data);
               this.carsearch.push(...data)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getCars(){
            this.cars = []
      let self = this;
      fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => {
          console.log("this is the car",data);
          this.carsearch.push(...data)
        })
        .catch(function (error) {
              console.log(error);
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