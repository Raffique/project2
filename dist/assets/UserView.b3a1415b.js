import{_,r as h,o as c,c as r,a as s,t,F as a,b as u,d as l}from"./index.847b50ed.js";const f={data(){return{articles:[],csrf_token:"",user:Object}},created:function(){this.getCsrfToken(),this.favs()},mounted(){},methods:{view(i){h.push({name:"car",params:{car_id:i}})},favs(){let i=this;fetch("/api/user",{method:"GET",headers:{"X-CSRFToken":this.csrf_token}}).then(function(e){return e.json()}).then(function(e){i.user=e.user}).catch(function(e){console.log(e)}),fetch("/api/user/favourites",{method:"GET",headers:{"X-CSRFToken":this.csrf_token}}).then(function(e){return e.json()}).then(function(e){i.articles=e.favs}).catch(function(e){console.log(e)})},getCsrfToken(){let i=this;fetch("/api/csrf-token").then(e=>e.json()).then(e=>{console.log(e),i.csrf_token=e.csrf_token})}}},p={class:"card"},v={class:"user text-center"},m={class:"profile"},g=["src"],k={class:"info"},x={class:"mb-0"},y={href:"#"},b={class:"bio text-center"},w={class:"about text-muted"},C={class:"follownumbers"},T=s("h5",{class:"mb-0"},"Email",-1),j=l(),F=s("h5",{class:"mb-0"},"Location",-1),V=l(),E=s("h5",{class:"mb-0"},"Joined",-1),B=l(),S={class:"container-fuild"},G=s("h2",null,"Favourites",-1),L={class:"card",style:{width:"300px",height:"480px"}},N=["src"],R={class:"card-title"},U={class:"card-body"},X={class:"card-title"},D={class:"pricetag"},J={class:"card-text addresstag"},O=s("br",null,null,-1),q=["onClick"],z=s("div",{class:"card-footer footertag"}," View more details ",-1),A=[z];function H(i,e,I,K,o,d){return c(),r(a,null,[(c(),r("div",{key:o.user,class:"container d-flex justify-content-center align-items-center"},[s("div",p,[s("div",v,[s("div",m,[s("img",{src:`/api/uploads/${o.user.photo}`,class:"rounded-circle"},null,8,g)]),s("div",k,[s("h4",x,t(o.user.name),1),s("span",null,[s("a",y,"@"+t(o.user.username),1)])])]),s("div",b,[s("div",w,[s("p",null,t(o.user.biography),1)]),s("div",C,[s("div",null,[T,j,s("span",null,t(o.user.email),1)]),s("div",null,[F,V,s("span",null,t(o.user.location),1)]),s("div",null,[E,B,s("span",null,t(o.user.date_joined),1)])])])])])),s("div",S,[G,(c(!0),r(a,null,u(o.articles,n=>(c(),r("div",{key:n,style:{display:"inline-block",margin:"10px"}},[s("div",L,[s("img",{style:{width:"300px",height:"200px"},src:`/api/uploads/${n.photo.split("/t")[0]}`,alt:"Card image"},null,8,N),s("h5",R,t(n.title),1),s("div",U,[s("h5",X,[l(t(n.year)+" "+t(n.make)+" ",1),s("div",D,"$"+t(n.price),1)]),s("span",J,t(n.model),1),O]),s("div",{onClick:M=>d.view(n.id),style:{"text-decoration-line":"none"}},A,8,q)])]))),128))])],64)}var Q=_(f,[["render",H]]);export{Q as default};
