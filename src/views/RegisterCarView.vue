<script>
  import router from "@/router/index.js";
    export default {
    created(){
        this.getCsrfToken();

    },
    data(){
        return {
            csrf_token: ''
        }
    },
    methods : {
        addcar(){

            let addcarForm = document.getElementById('addcarForm');
            let form_data = new FormData(addcarForm);

            fetch("/api/cars", {
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
                    alert("Successful car addition")
                    router.push(`/`)
                }
                
            })
            .catch(function (error) {
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
    },
    
}
</script>

<template>
  <div>
    <div class="Car container">
      <h2>Add Car</h2>
      <div class="form-container">
        <form @submit.prevent="addcar" id="addcarForm" method="POST">
          <div class="grid-container">
              <div class="grid-item">
                <label for="make">Make</label><br>
                <input type="text" id="form-con" name="make" placeholder="Honda"><br> 
              </div>
              <div  class="grid-item">
                <label for="model">Model</label><br>
                <input type="text" id="form-con" name="model" placeholder="CRV"><br>
              </div>
              <div class="grid-item">
                <label for="colour">Colour</label><br>
                <input type="text" id="form-con" name="colour" placeholder="Black"><br>
              </div>
              <div class="grid-item">
                <label for="year">Year</label><br>
                <input type="text" id="form-con" name="year" placeholder="2020"><br>
              </div>
            <div class="grid-item">
                <label for="price">Price</label><br>
                <input type="number" id="form-con" name="price" placeholder="1000000"><br>
            </div>
            <div class="grid-item">
                <label for="car_type">Car Type</label><br>
                <select id="form-con" name="car_type">
                  <option value="SUV">SUV</option>
                  <option value="HatchBack">HatchBack</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Estate">Estate</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Wagon">Wagon</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Vans">Vans</option>
                  <option value="Truck">Truck</option>
                </select><br>
            </div>
            <div class="grid-item">
              <label for="transmission">Transmission</label><br>
              <select id="form-con" name="transmission">
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
              </select><br><br>
            </div>
          </div>
          <br>
            <label for="description">Desription</label><br><br>
            <textarea id="descr" name="description" rows="5" cols="100"></textarea><br>
            <label for="photo">Upload Photo</label><br>
            <input type="file" id="file" name="photo" multiple/><br>
            <button type="submit" id="save">Save</button>
      </form>
      </div>
    </div>
 </div>
</template>

<style>

  .grid-container {
    display:grid;
    grid-template-columns: 400px 400px  ;
    padding: 10px;
  }
  .grid-item {
    padding: 20px;
    font-size: 16px;
  }

  .form-container{
    border: 2px inset rgb(231, 225, 225);
    padding-left: 50px;
    padding-top: 35px;
    padding-bottom: 50px;
    margin-right: 280px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 10px;
        

  }

  #descr{
      background-color: beige;
      border-radius: 20px;
  }

  #form-con{
      width: 100%;
      box-sizing: border-box;
      display:inline-block;
      background-color: beige;
      border-radius: 7px;
      height: 40px;
  }

  label{
    font-weight: bold;
  }

  #save{
      padding: 10px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      background-color:rgba(128, 128, 128, 0.87);
      color:  #e7e7e7;
      border-radius: 7px;
      font-family: Tahoma;
      font-weight: bold;
  }

 

.right {
  float: right;
  font-size:18px ;
  font-weight: bold;
}

.left {
  float: left;
  right:40px;
  font-size: 30px;
  font-weight: bold;
}

  
</style>