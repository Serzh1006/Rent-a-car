"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{3137:function(e,a,n){n.d(a,{Z:function(){return V}});var s=n(3433),i=n(9439),t=n(4164),r=n(2791),l=n(9434),c=n(6351),o=n(8020),d="modal_backdrop__hpFL1",h="modal_modal__Nszx8",m="modal_containerModal__EemvA",u="modal_btnCloseModal__7Qea8",p="modal_boxImg__uvqyG",x="modal_infoModal__SmgkP",v="modal_infoModalSecond__d2ngu",_="modal_accessoriesText__+w2wG",j="modal_description__jjwEL",w="modal_titleFuctions__WVRFr",g="modal_rentalLink__p3AB7",f="modal_marka__3Q5ug",k="modal_importantInfo__Gc3ML",b="modal_age__ImVNO",C="modal_payInfo__+sXeH",N="modal_mileage__ppeeL",M="modal_price__2YtB6",y={cardItem:"carsItem_cardItem__l57EY",cardContainer:"carsItem_cardContainer__BLIwg",cardImgWrapper:"carsItem_cardImgWrapper__Okftj",cardName:"carsItem_cardName__T9fOr",markaCar:"carsItem_markaCar__ahu8p",priceCar:"carsItem_priceCar__lKcmL",infoCar:"carsItem_infoCar__oA+HJ",infoCarSecond:"carsItem_infoCarSecond__nBhHK",learMoreBtn:"carsItem_learMoreBtn__r22+0",model:"carsItem_model__3oRAn",btnFavorite:"carsItem_btnFavorite__M9BHR"},L=n(3329),I=function(e){var a=e.showModal,n=e.item,i=n.img,t=n.make,l=n.model,c=n.address,o=n.id,I=n.year,B=n.type,O=n.fuelConsumption,V=n.engineSize,F=n.description,S=n.accessories,Z=n.functionalities,E=n.rentalConditions,W=n.rentalPrice,A=n.mileage,H=c.split(" ").slice(-2),P=H.slice(0,1).join("").replace(","," ").trim(),T=H.slice(-1).join(""),R=E.replace("\n"," ").replace("\n"," ").split(" "),z="",G=R.slice(3,6);if(R.includes("license")){var Y=R.indexOf("license");z=R.slice(Y+1)}var q=function(e){"Escape"===e.code&&a(!1)};return(0,r.useEffect)((function(){document.addEventListener("keydown",q)})),(0,r.useEffect)((function(){return function(){document.removeEventListener("keydown",q)}})),(0,L.jsx)("div",{onClick:function(e){return function(e){"backdrop"===e.target.id&&a(!1)}(e)},id:"backdrop",className:d,children:(0,L.jsx)("div",{className:h,children:(0,L.jsxs)("div",{className:m,children:[(0,L.jsx)("button",{className:u,type:"button",onClick:function(){return a(!1)},children:(0,L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,L.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,L.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,L.jsx)("div",{className:p,children:(0,L.jsx)("img",{src:i,alt:F,width:"469px"})}),(0,L.jsx)("div",{children:(0,L.jsxs)("p",{className:f,children:["".concat(t," "),(0,L.jsxs)("span",{className:y.model,children:[l.length<=7?l:"",","]}),(0,L.jsx)("span",{className:y.yearCar,children:I})]})}),(0,L.jsxs)("div",{className:x,children:[P,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),T,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),"Id:".concat(o),(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),"Year:".concat(I),(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),"Type:".concat(B)]}),(0,L.jsxs)("div",{className:v,children:["Fuel Consumption:".concat(O),(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),"Engine Size:".concat(V)]}),(0,L.jsx)("p",{className:j,children:F}),(0,L.jsx)("h2",{className:w,children:"Accessories and functionalities:"}),(0,L.jsx)("p",{className:_,children:[].concat((0,s.Z)(S),(0,s.Z)(Z)).join(" | ")}),(0,L.jsx)("h2",{className:w,children:"Rental Conditions:"}),(0,L.jsxs)("div",{className:k,children:[(0,L.jsxs)("p",{children:["Minimum age:",(0,L.jsx)("span",{className:b,children:R[2]})]}),(0,L.jsx)("p",{children:G.join(" ")})]}),(0,L.jsxs)("div",{className:C,children:[(0,L.jsx)("p",{children:z.join(" ")}),(0,L.jsxs)("p",{children:["Mileage:",(0,L.jsx)("span",{className:N,children:(A/1e3).toString().replace(".",",")})]}),(0,L.jsxs)("p",{children:["Price:",(0,L.jsx)("span",{className:M,children:W})]})]}),(0,L.jsx)("a",{className:g,href:"tel:+380730000000",children:"Rental Car"})]})})})},B=function(e){var a=e.objCar,n=(0,r.useState)(!1),d=(0,i.Z)(n,2),h=d[0],m=d[1],u=(0,r.useState)(!1),p=(0,i.Z)(u,2),x=p[0],v=p[1],_=(0,l.I0)(),j=(0,l.v9)(c.a1),w=(0,l.v9)(c.Tc),g=a.img,f=a.description,k=a.make,b=a.model,C=a.year,N=a.rentalPrice,M=a.address,B=a.rentalCompany,O=a.type,V=a.mileage,F=a.accessories,S=a.functionalities,Z=a.id;(0,r.useEffect)((function(){w.find((function(e){return e.id===Z}))&&m(!0)}),[w,Z]);var E=[].concat((0,s.Z)(F),(0,s.Z)(S)).sort((function(e,a){return e.length-a.length})).slice(0,1),W=M.split(" ").slice(-2),A=W.slice(0,1).join("").replace(","," ").trim(),H=W.slice(-1).join("");return(0,L.jsxs)("li",{id:Z,className:y.cardItem,children:[x&&(0,t.createPortal)((0,L.jsx)(I,{showModal:v,item:a}),document.querySelector("#root")),(0,L.jsxs)("div",{className:y.cardContainer,children:[(0,L.jsxs)("div",{className:y.cardImgWrapper,children:[(0,L.jsx)("img",{src:g,alt:f,width:"401px"}),(0,L.jsx)("button",{onClick:function(){return function(e){if(!h){var a=j.find((function(a){return a.id===e}));m(!0),_((0,o.qn)(a))}h&&(m(!1),_((0,o.Tx)(e)))}(Z)},className:y.btnFavorite,type:"button",children:(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:h?"#3470FF":"none",children:(0,L.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:h?"#3470FF":"white",strokeOpacity:h?"1":"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,L.jsxs)("div",{className:y.cardName,children:[(0,L.jsx)("div",{className:y.modelWrap,children:(0,L.jsxs)("p",{className:y.markaCar,children:["".concat(k," "),(0,L.jsxs)("span",{className:y.model,children:[b.length<=7?b:"",","]}),(0,L.jsx)("span",{className:y.yearCar,children:C})]})}),(0,L.jsx)("span",{className:y.priceCar,children:N})]})]}),(0,L.jsxs)("div",{className:y.infoCar,children:[A,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),H,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),B]}),(0,L.jsxs)("div",{className:y.infoCarSecond,children:[O,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),b,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),V,(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"16",viewBox:"0 0 2 16",fill:"none",children:(0,L.jsx)("path",{d:"M1 0V16",stroke:"#121417",strokeOpacity:"0.1"})}),E]}),(0,L.jsx)("button",{className:y.learMoreBtn,type:"button",onClick:function(){v(!0)},children:"Learn More"})]})},O="cars_cardList__MUl1m",V=function(e){var a=e.items;return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("ul",{className:O,children:a.map((function(e){return(0,L.jsx)(B,{objCar:e},e.id)}))})})}},1624:function(e,a,n){var s=n(9439),i=n(6969),t=n(2791),r=n(3329),l=[{value:"buick",label:"Buick"},{value:"volvo",label:"Volvo"},{value:"hummer",label:"HUMMER"},{value:"subaru",label:"Subaru"},{value:"mitsubishi",label:"Mitsubishi"},{value:"nissan",label:"Nissan"},{value:"lincoln",label:"Lincoln"},{value:"gmc",label:"GMC"},{value:"hyundai",label:"Hyundai"},{value:"mini",label:"MINI"},{value:"bentley",label:"Bentley"},{value:"mercedesbenz",label:"Mercedes-Benz"},{value:"astonmartin",label:"Aston Martin"},{value:"pontiac",label:"Pontiac"},{value:"lamborghini",label:"Lamborghini"},{value:"audi",label:"Audi"},{value:"bmw",label:"BMW"},{value:"chevrolet",label:"Chevrolet"},{value:"chrysler",label:"Chrysler"},{value:"kia",label:"Kia"},{value:"land",label:"Land"}];a.Z=function(){var e=(0,t.useState)(null),a=(0,s.Z)(e,2),n=a[0],c=a[1];return(0,r.jsx)("div",{className:"App",children:(0,r.jsx)(i.ZP,{defaultValue:n,onChange:c,options:l,placeholder:"Enter the text"})})}},7644:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var s=n(1624),i=n(9434),t=n(6351),r=n(3137),l="favorite_title__hQM7B",c=n(3329),o=function(){var e=(0,i.v9)(t.Tc);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z,{}),0===e.length?(0,c.jsx)("h2",{className:l,children:"You're collection is empty"}):(0,c.jsx)(r.Z,{items:e})]})}},6351:function(e,a,n){n.d(a,{Hm:function(){return i},Tc:function(){return t},a1:function(){return s}});var s=function(e){return e.cars.cars.items},i=function(e){return e.cars.cars.countData},t=function(e){return e.favorites.favorites}}}]);
//# sourceMappingURL=644.288d976d.chunk.js.map