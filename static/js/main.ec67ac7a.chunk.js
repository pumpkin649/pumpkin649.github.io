(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/Yamaha Flute.647c1303.png"},17:function(e,t,n){e.exports=n.p+"static/media/instrument2.94a54c56.png"},18:function(e,t,n){e.exports=n.p+"static/media/instrument3.86deab64.png"},19:function(e,t,n){e.exports=n.p+"static/media/instrument4.13ff26a1.png"},20:function(e,t,n){e.exports=n.p+"static/media/instrument5.e84d03d1.png"},21:function(e,t,n){e.exports=n.p+"static/media/instrument6.631cd9a8.png"},22:function(e,t,n){e.exports=n(45)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),o=(n(27),n(28),n(3)),l=n(1);var s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{class:"ui-bar"},r.a.createElement("h1",null,"\ud83c\udfbb NYC Music Rentals "))),r.a.createElement("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"}},r.a.createElement(o.b,{to:"/search"},"\ud83d\udd0d View All")," |"," ",r.a.createElement(o.b,{to:"/upload_instruments"},"\ud83d\udd17 Upload New Instrument")," |"," ",r.a.createElement(o.b,{to:"/lessons"},"\ud83c\udfa4 Lessons")," |"," ",r.a.createElement(o.b,{to:"/educators"},"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfeb Educators")," |"," ",r.a.createElement(o.b,{to:"/about_us"},"\ud83d\udcde About Us")),r.a.createElement(l.a,null))},u=n(4),m=n(5),d=n(8),p=n(7),h=n(6),b=(n(29),n(10)),f=n(16),g=n.n(f),v=n(17),E=n.n(v),j=n(18),y=n.n(j),O=n(19),C=n.n(O),x=n(20),k=n.n(x),w=n(21),S=n.n(w),R=[{id:0,picture:g.a,description:"Yamaha brand flute",contact:"alicepaul334876@gmail.com",reserved:!1},{id:1,picture:E.a,description:"Bechstein brand piano",contact:"jasperjohns99543@gmail.com",reserved:!1},{id:2,picture:y.a,description:"Yamaha brand guitar",contact:"amandagormannn88954.com",reserved:!0},{id:3,picture:C.a,description:"Roland V brand accordion",contact:"joanaceddiadcb8@gmail.com",reserved:!1},{id:4,picture:k.a,description:"Eastar brand violin",contact:"kathyhochulnyc94577@gmail.com",reserved:!1},{id:5,picture:S.a,description:"Stentor brand violin",contact:"samanthairbywla5005@gmail.com",reserved:!1}];function N(){return R}function I(e,t){var n,a=Object(b.a)(R);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.id===e&&(r.reserved=t)}}catch(i){a.e(i)}finally{a.f()}}var D,L=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={file:null,description:null,contact:null},a.handleImageChange=a.handleImageChange.bind(Object(d.a)(a)),a.handleDescriptionChange=a.handleDescriptionChange.bind(Object(d.a)(a)),a.handleContactChange=a.handleContactChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"handleImageChange",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0]),description:this.state.description,contact:this.state.contact})}},{key:"handleDescriptionChange",value:function(e){this.setState({file:this.state.file,description:e.target.value,contact:this.state.contact})}},{key:"handleContactChange",value:function(e){this.setState({file:this.state.file,description:this.state.description,contact:e.target.value})}},{key:"handleSubmit",value:function(e){!function(e,t,n){var a,r=0,i=Object(b.a)(R);try{for(i.s();!(a=i.n()).done;){var c=a.value;r=Math.max(r,c.id)}}catch(o){i.e(o)}finally{i.f()}c={id:r+1,picture:e,description:t,contact:n,reserved:!1},R.unshift(c)}(this.state.file,this.state.description,this.state.contact),this.props.navigate("/search")}},{key:"render",value:function(){var e;return this.state.file&&(e=r.a.createElement("img",{src:this.state.file,className:"Instrument-logo"})),r.a.createElement("div",{className:"upload-instrument"},r.a.createElement("form",null,r.a.createElement("label",null,"Instrument Description"),r.a.createElement("input",{type:"text",id:"description",name:"description",onChange:this.handleDescriptionChange,placeholder:"Describe your instrument.."}),r.a.createElement("label",null,"Contact"),r.a.createElement("input",{type:"text",name:"contact",onChange:this.handleContactChange,placeholder:"Your contact email.."}),r.a.createElement("label",null,"Instrument Image"),r.a.createElement("input",{type:"file",onChange:this.handleImageChange}),e,r.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),n}(r.a.Component),Y=(D=L,function(e){return r.a.createElement(D,Object.assign({},e,{navigate:Object(l.g)()}))}),z=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{navigate:Object(l.g)(),location:Object(l.f)()}))}}(function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{"font-size":"30px",display:"block",padding:10}},r.a.createElement("h4",null,"\ud83d\ude06 Greetings from NYC Music Rentals! \ud83d\ude06"),r.a.createElement("div",null,r.a.createElement("div",{style:{"font-size":"20px","text-align":"left","margin-right":"100px","margin-left":"100px","margin-top":"50px","margin-bottom":"50px",color:"dark grey"}},"NYCMusicRentals is a consumer-based website, we aim to create one of the largest and most collective musical instrument websites for new yorkers to rent various musical instruments online with flexible pickup options. ",r.a.createElement("br",null),r.a.createElement("br",null),"Using technology innovation and flexible delivery options, we satisfies customers in a productive and efficient process. Our vision is based on the future growth in renting and our belief that people who are interested in music should not lose the opportunity to play musical instruments because of the expensive pricing for musical instruments.")))}}]),n}(r.a.Component)),U=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{navigate:Object(l.g)(),location:Object(l.f)()}))}}(function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{"font-size":"30px",display:"block",padding:10}},r.a.createElement("h4",null,"\ud83d\ude06 See you soon! We're working on it! \ud83d\ude06"),r.a.createElement("div",null,r.a.createElement("div",{style:{"font-size":"20px","text-align":"left","margin-right":"100px","margin-left":"100px","margin-top":"50px","margin-bottom":"50px",color:"dark grey"}})))}}]),n}(r.a.Component)),A=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{navigate:Object(l.g)(),location:Object(l.f)()}))}}(function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{"font-size":"30px",display:"block",padding:10}},r.a.createElement("h4",null,"\ud83d\ude06 See you soon! We're working on it! \ud83d\ude06"),r.a.createElement("div",null,r.a.createElement("div",{style:{"font-size":"20px","text-align":"left","margin-right":"100px","margin-left":"100px","margin-top":"50px","margin-bottom":"50px",color:"dark grey"}})))}}]),n}(r.a.Component)),B=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{navigate:Object(l.g)()}))}}(function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.navigate("/search?s="+e.target.querySelector("input").value)}},{key:"render",value:function(){return console.log("props:"+this.props.query),r.a.createElement("form",{action:"/search",method:"get",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",id:"header-search",placeholder:"Search instruments",name:"s"}),r.a.createElement("button",{type:"submit"},"Search"))}}]),n}(r.a.Component)),M=(n(30),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e,t=this;return e=this.props.reserved?r.a.createElement("button",{onClick:function(){return t.props.onClick()}},"Release"):r.a.createElement("button",{onClick:function(){return t.props.onClick()}},"Reserve"),r.a.createElement("div",{className:"Reservation"},r.a.createElement("div",{className:"Reservation-picture"},r.a.createElement("img",{src:this.props.picture,className:"Instrument-logo"})),r.a.createElement("div",{className:"Reservation-description"},this.props.description),r.a.createElement("div",{className:"Reservation-contact"},this.props.contact),e)}}]),n}(r.a.Component)),W=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{navigate:Object(l.g)(),location:Object(l.f)()}))}}(function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={reservations:N()},a}return Object(m.a)(n,[{key:"handleReservationClick",value:function(e,t){t?(console.log("Releasing item: "+e),I(e,!1)):(console.log("Reserving item: "+e),I(e,!0)),this.setState({reservations:N()})}},{key:"matchReservationWithQuery",value:function(e,t){return""===(t=(t||"").toLowerCase())||((e.description||"").toLowerCase().includes(t)||(e.contact||"").toLowerCase().includes(t))}},{key:"render",value:function(){for(var e=this,t=this.props.location.search,n=new URLSearchParams(t).get("s"),a=[],i=function(t){var i=e.state.reservations[t],c=r.a.createElement(M,{picture:i.picture,description:i.description,contact:i.contact,reserved:i.reserved,onClick:function(){return e.handleReservationClick(i.id,i.reserved)}});e.matchReservationWithQuery(i,n)&&a.push(c)},c=0;c<this.state.reservations.length;c++)i(c);return r.a.createElement("div",null,r.a.createElement(B,{query:n}),a)}}]),n}(r.a.Component));c.a.render(r.a.createElement(o.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",element:r.a.createElement(s,null)},r.a.createElement(l.b,{path:"/search",element:r.a.createElement(W,null)}),r.a.createElement(l.b,{path:"upload_instruments",element:r.a.createElement(Y,null)}),r.a.createElement(l.b,{path:"/lessons",element:r.a.createElement(U,null)}),r.a.createElement(l.b,{path:"/educators",element:r.a.createElement(A,null)}),r.a.createElement(l.b,{path:"/about_us",element:r.a.createElement(z,null)})))),document.getElementById("root"))}},[[22,1,2]]]);