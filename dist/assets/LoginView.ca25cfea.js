import{_ as a,r as i,o as c,c as l,a as o,w as g,b as _,d as m,e as f}from"./index.56eeb11b.js";const h={created(){this.getCsrfToken(),document.body.style.backgroundImage="url(/src/assets/login.gif)",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover"},data(){return{csrf_token:""}},methods:{register(){i.push("register")},login(){let n=document.getElementById("loginForm"),e=new FormData(n);fetch("/api/auth/login",{method:"POST",body:e,headers:{"X-CSRFToken":this.csrf_token}}).then(function(t){return t.json()}).then(function(t){console.log("json 200"),t.status==200&&(localStorage.setItem("login",!0),alert("Succesful login"),i.push("/"))}).catch(function(t){console.log(t)})},getCsrfToken(){let n=this;fetch("/api/csrf-token").then(e=>e.json()).then(e=>{console.log(e),n.csrf_token=e.csrf_token})}}},p=o("ul",null,[o("li",{class:"right"},[o("a",{href:"/",class:"nav-link"},"Back")]),o("li",{class:"right"},[o("a",{href:"/register",class:"nav-link"},"Register")])],-1),b=o("h2",null,"Account Login",-1),v={class:"regform-container"},k=_('<div class="grid-container"><div class="grid-item"><label for="user">Username</label><br><input type="text" id="form-con" name="username"><br><br></div><div class="grid-item"><label for="pass">Password</label><br><input type="password" id="form-con" name="password"><br></div><button class="btn">Login</button></div>',1),y=[k];function $(n,e,t,d,u,s){return c(),l("div",null,[p,b,o("div",v,[o("form",{onSubmit:e[0]||(e[0]=g((...r)=>s.login&&s.login(...r),["prevent"])),id:"loginForm",method:"POST"},y,32)])])}var F=a(h,[["render",$]]);const L={setup(){},components:{LoginForm:F}},S={class:"container"},w=o("h2",null,"Login",-1);function x(n,e,t,d,u,s){const r=m("LoginForm");return c(),l("div",S,[w,f(r)])}var T=a(L,[["render",x]]);export{T as default};