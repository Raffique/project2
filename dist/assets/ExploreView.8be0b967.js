import{_,d as p,o as c,c as a,a as e,w as f,F as h,f as v,t as n,e as m,g,h as k,b as x}from"./index.56eeb11b.js";const b={data(){return{csrf_token:"",link:"",carsearch:[]}},created(){this.getCars(),this.getCsrfToken()},methods:{search(){this.carsearch=[];let s=document.getElementById("searchForm"),t=new FormData(s);fetch("/api/search",{method:"POST",body:t,headers:{"X-CSRFToken":this.csrf_token}}).then(r=>r.json()).then(r=>{console.log("came to data"),console.log(r),this.carsearch.push(...r)}).catch(function(r){console.log(r)})},getCars(){this.cars=[],fetch("/api/cars").then(s=>s.json()).then(s=>{console.log("this is the car",s),this.carsearch.push(...s)}).catch(function(s){console.log(s)})},getCsrfToken(){let s=this;fetch("/api/csrf-token").then(t=>t.json()).then(t=>{console.log(t),s.csrf_token=t.csrf_token})}}},w=e("h2",{class:"page-header"},"Explore",-1),E=e("br",null,null,-1),y={id:"explore-card",class:"cardleft"},C=x('<div class="row mb-2"><div class="col-auto"><div class="form-group"><label for="make">Make</label><input name="make" placeholder="Enter Make" class="form-control explore-field"><input name="model" placeholder="Enter Model" class="form-control explore-field"><br><button type="button" class="btn btn-success">Search</button></div></div></div>',1),$=[C],F={key:0},S={class:"container_view"},V={class:"gridview"},T={class:"text-left"},B=["src"],M={class:"car-body"},N={class:"card-title"},j={class:"cost"},D=e("div",{class:"cardfooter"}," View more details ",-1);function L(s,t,r,u,i,l){const d=p("RouterLink");return c(),a(h,null,[w,E,e("div",y,[e("form",{onSubmit:t[0]||(t[0]=f((...o)=>l.search&&l.search(...o),["prevent"])),id:"searchForm",method:"POST"},$,32)]),i.carsearch!=[]?(c(),a("div",F,[e("div",S,[(c(!0),a(h,null,v(i.carsearch,o=>(c(),a("div",{key:o.id},[e("div",V,[e("div",T,[e("img",{class:"img-top",src:"/uploads/"+o.photo},null,8,B),e("div",M,[e("h5",N,n(o.year)+" "+n(o.make),1),e("p",null,n(o.model),1),e("div",j,n(o.price),1)]),m(d,{class:"Details",to:"/cars/"+o.id+"/"+this.$store.state.uid},{default:g(()=>[D]),_:2},1032,["to"])])])]))),128))])])):k("",!0)],64)}var R=_(b,[["render",L]]);const O={data(){return{csrf_token:"",description:"",photo:"",email:"",name:"",username:"",password:"",location:"",message:"Explore page"}},components:{Explore:R}},P={class:"container"};function I(s,t,r,u,i,l){const d=p("Explore");return c(),a("div",P,[m(d)])}var q=_(O,[["render",I]]);export{q as default};
