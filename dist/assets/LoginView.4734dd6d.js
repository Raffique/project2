import{_ as a,r,o as l,c,a as s,w as d,e as u}from"./index.be09d447.js";const _={created(){this.getCsrfToken()},data(){return{csrf_token:""}},methods:{register(){r.push("register")},login(){let o=document.getElementById("loginForm"),e=new FormData(o);fetch("/api/auth/login",{method:"POST",body:e,headers:{"X-CSRFToken":this.csrf_token}}).then(function(t){return t.json()}).then(function(t){t.status==200&&(localStorage.setItem("logged","true"),r.push("/"))}).catch(function(t){console.log(t)})},getCsrfToken(){let o=this;fetch("/api/csrf-token").then(e=>e.json()).then(e=>{console.log(e),o.csrf_token=e.csrf_token})}}},f=s("h2",null,"Account Login",-1),g={class:"regform-container"},m=u('<div class="grid-container"><div class="grid-item"><label for="user">Username</label><br><input type="text" id="username" name="username"><br><br></div><div class="grid-item"><label for="pass">Password</label><br><input type="password" id="password" name="password"><br></div><button class="btn">Login</button></div>',1),h=[m];function p(o,e,t,b,v,n){return l(),c("div",null,[f,s("div",g,[s("form",{onSubmit:e[0]||(e[0]=d((...i)=>n.login&&n.login(...i),["prevent"])),id:"loginForm",method:"POST"},h,32)])])}var w=a(_,[["render",p]]);export{w as default};
