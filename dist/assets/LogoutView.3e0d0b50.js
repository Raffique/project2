import{_ as e,r as o}from"./index.56eeb11b.js";const r={data(){return{}},mounted(){fetch("/api/auth/logout",{}).then(function(t){return t.json()}).then(function(t){t.status==200&&(localStorage.setItem("login",!1),alert("Logged Out!"),o.push("front"))})}};function n(t,a,u,s,c,f){return null}var l=e(r,[["render",n]]);export{l as default};
