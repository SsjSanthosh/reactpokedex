(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),o=t(1),s=t(2),p=t(4),l=t(3),m=t(5),d=(t(13),t(14),function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.name,n=e.type,c=e.xp;(a=String(a)).length<3&&(a=2===a.length?"0"+a:"00"+a);var i="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(a,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-name"},t),r.a.createElement("div",{className:"Pokecard-img"},r.a.createElement("img",{src:i,alt:t,class:""})),r.a.createElement("h3",{className:"Pokecard-data"},"Type - ",n),r.a.createElement("h3",{className:"Pokecard-data"},"Exp - ",c))}}]),a}(n.Component)),u=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=function(){var a=e.props.pokemon,t=Math.floor(Math.random()*a.length),n=a[t];return e.props.pokemon.splice(t,1),n},t=[],n=[],c=function(e){var a=0;return e.forEach((function(e){a+=e.base_experience})),a};!function(){for(var r=e.props.pokemon.length/2,c=0;c<r;c++)t.push(a()),n.push(a())}();var i,o=c(t);return i=o>c(n)?"p1":"p2",r.a.createElement("div",null,r.a.createElement("h1",{className:"Pokedex-title"},"POKEDEX!"),r.a.createElement("h3",{className:"Pokedex-title ".concat("p1"===i?"winner":"loser")},"p1"===i?"Winning Hand":"Losing Hand"),r.a.createElement("h4",{className:"Pokedex-title"},"Total Experience : ",o),r.a.createElement("div",{className:"hand1 Pokedex-cards"},t.map((function(e){return r.a.createElement(d,{id:e.id,type:e.type,xp:e.base_experience,name:e.name})}))),r.a.createElement("h3",{className:"Pokedex-title ".concat("p2"===i?"winner":"loser")},"p2"===i?"Winning Hand":"Losing Hand"),r.a.createElement("h4",{className:"Pokedex-title"},"Total Experience : ",o),r.a.createElement("div",{className:"hand1 Pokedex-cards "},n.map((function(e){return r.a.createElement(d,{id:e.id,type:e.type,xp:e.base_experience,name:e.name})}))))}}]),a}(n.Component);u.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var h=u,b=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null))}}]),a}(n.Component);t(15);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ab8743e4.chunk.js.map