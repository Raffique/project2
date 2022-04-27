import{_ as n,r as u,o as l,c as s,a,w as m,b as c,d as f,e as b}from"./index.56eeb11b.js";const v={created(){this.getCsrfToken()},data(){return{csrf_token:""}},methods:{addcar(){let t=document.getElementById("addcarForm"),e=new FormData(t);fetch("/api/cars",{method:"POST",body:e,headers:{"X-CSRFToken":this.csrf_token}}).then(function(o){return o.json()}).then(function(o){o.status==200&&(alert("Successful car addition"),u.push("/"))}).catch(function(o){console.log(o)})},getCsrfToken(){let t=this;fetch("/api/csrf-token").then(e=>e.json()).then(e=>{console.log(e),t.csrf_token=e.csrf_token})}}},h=c('<ul><li class="left"><a href="/home" class="nav-link">United Auto Sales</a></li><li class="right"><a href="/" class="nav-link">Logout</a></li><li class="right"><a href="/Explore" class="nav-link">Explore</a></li><li class="right"><a href="/Profile" class="nav-link">Profile</a></li><li class="right"><a href="/home" class="nav-link">Home</a></li></ul>',1),_={class:"Car container"},g=a("h2",null,"Add Car",-1),k={class:"form-container"},C=c('<div class="grid-container"><div class="grid-item"><label for="make">Make</label><br><input type="text" id="form-con" name="make" placeholder="Honda"><br></div><div class="grid-item"><label for="model">Model</label><br><input type="text" id="form-con" name="model" placeholder="CRV"><br></div><div class="grid-item"><label for="colour">Colour</label><br><input type="text" id="form-con" name="colour" placeholder="Black"><br></div><div class="grid-item"><label for="year">Year</label><br><input type="text" id="form-con" name="year" placeholder="2020"><br></div><div class="grid-item"><label for="price">Price</label><br><input type="number" id="form-con" name="price" placeholder="1000000"><br></div><div class="grid-item"><label for="car_type">Car Type</label><br><select id="form-con" name="car_type"><option value="SUV">SUV</option><option value="HatchBack">HatchBack</option><option value="Sedan">Sedan</option><option value="Estate">Estate</option><option value="Coupe">Coupe</option><option value="Wagon">Wagon</option><option value="Pickup">Pickup</option><option value="Convertible">Convertible</option><option value="Vans">Vans</option><option value="Truck">Truck</option></select><br></div><div class="grid-item"><label for="transmission">Transmission</label><br><select id="form-con" name="transmission"><option value="Automatic">Automatic</option><option value="Manual">Manual</option></select><br><br></div></div><br><label for="description">Desription</label><br><br><textarea id="descr" name="description" rows="5" cols="100"></textarea><br><label for="photo">Upload Photo</label><br><input type="file" id="file" name="photo" multiple><br><button type="submit" id="save">Save</button>',12),y=[C];function x(t,e,o,d,p,r){return l(),s("div",null,[h,a("div",_,[g,a("div",k,[a("form",{onSubmit:e[0]||(e[0]=m((...i)=>r.addcar&&r.addcar(...i),["prevent"])),id:"addcarForm",method:"POST"},y,32)])])])}var S=n(v,[["render",x]]);const F={setup(){},components:{RegisterCarForm:S}},T={class:"container"};function V(t,e,o,d,p,r){const i=f("RegisterCarForm");return l(),s("div",T,[b(i)])}var P=n(F,[["render",V]]);export{P as default};
