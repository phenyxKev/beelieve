"use strict";(self["webpackChunkbeelieve"]=self["webpackChunkbeelieve"]||[]).push([[121],{307:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var o=i(252);function l(t,e,i,l,r,n){const a=(0,o.up)("NavComp"),s=(0,o.up)("GalleryComp"),c=(0,o.up)("FooterComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(s),(0,o.Wm)(c)],64)}var r=i(211),n=i(577);const a=t=>((0,o.dD)("data-v-b2ec8b8c"),t=t(),(0,o.Cn)(),t),s={class:"container"},c={class:"current"},u=["src","alt"],p={class:"info"},m=a((()=>(0,o._)("h1",null,"PROJECT",-1))),d=(0,o.Uk)("Click to see more"),b={class:"thumbnails"},h=["src","alt"],f=["src","alt"],v=["src","alt"],g=a((()=>(0,o._)("p",null,"Click on thumbnail or arrows to select project",-1)));function w(t,e,i,l,r,a){const w=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("div",s,[(0,o._)("div",c,[(0,o._)("img",{src:r.projects[r.pointer].url,alt:r.projects[r.pointer].url},null,8,u),(0,o._)("div",p,[m,(0,o._)("p",null,"-Name: "+(0,n.zw)(r.projects[r.pointer].name),1),(0,o._)("p",null,"-Budget: "+(0,n.zw)(r.projects[r.pointer].budget)+" €",1),(0,o._)("p",null,"-Completed: "+(0,n.zw)(r.projects[r.pointer].completed)+" %",1),(0,o._)("p",null,"-Description: "+(0,n.zw)(r.projects[r.pointer].description),1),(0,o.Wm)(w,{to:"/project/"+r.projects[r.pointer].id},{default:(0,o.w5)((()=>[d])),_:1},8,["to"])]),(0,o._)("div",b,[(0,o._)("button",{onClick:e[0]||(e[0]=t=>a.prevSlide(r.pointer))},"‹"),(0,o._)("div",{class:"thumbnail active",onClick:e[1]||(e[1]=t=>a.goToSlide(0))},[(0,o._)("img",{src:r.projects[0].url,alt:r.projects[0].url},null,8,h)]),(0,o._)("div",{class:"thumbnail",onClick:e[2]||(e[2]=t=>a.goToSlide(1))},[(0,o._)("img",{src:r.projects[1].url,alt:r.projects[1].url},null,8,f)]),(0,o._)("div",{class:"thumbnail",onClick:e[3]||(e[3]=t=>a.goToSlide(2))},[(0,o._)("img",{src:r.projects[2].url,alt:r.projects[2].url},null,8,v)]),(0,o._)("button",{onClick:e[4]||(e[4]=t=>a.nextSlide(r.pointer))},"›")])])]),g])}var j={name:"GalleryComp",data(){return{setInterval:!0,pointer:0,projects:[{id:"P1",name:"Portugal Project",budget:2800,completed:70,description:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",url:"https://images.unsplash.com/photo-1603657289433-e4983d2114b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},{id:"P2",name:"Senegal Project",budget:1900,completed:10,description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:"https://images.unsplash.com/photo-1644772019005-5dc8e8ad66b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"},{id:"P3",name:"Camargue Project",budget:2370,completed:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",url:"https://images.unsplash.com/photo-1562747981-1975c624e26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}]}},methods:{goToSlide(t){this.setInterval=!1,this.pointer=t,this.thumbnail(t)},prevSlide(t){this.setInterval=!1,t--,t<0&&(t=2),this.pointer=t,this.thumbnail(t)},nextSlide(t){t++,t>2&&(t=0),this.pointer=t,this.thumbnail(t)},thumbnail(t){const e=document.getElementsByClassName("thumbnail");for(let i=0;i<e.length;i++)e[i].classList.remove("active");e[t].classList.add("active")}}},x=i(744);const _=(0,x.Z)(j,[["render",w],["__scopeId","data-v-b2ec8b8c"]]);var C=_,k=i(645),D={name:"GalleryView",components:{NavComp:r.Z,GalleryComp:C,FooterComp:k.Z}};const G=(0,x.Z)(D,[["render",l]]);var H=G}}]);
//# sourceMappingURL=gallery.30f8f6c6.js.map