(this["webpackJsonpstar-films"]=this["webpackJsonpstar-films"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/episode1.4c86c3df.jpg"},28:function(e,t,n){e.exports=n.p+"static/media/episode2.74375f3f.jpg"},29:function(e,t,n){e.exports=n.p+"static/media/episode3.5256d4c3.jpg"},30:function(e,t,n){e.exports=n.p+"static/media/episode4.96290694.jpg"},31:function(e,t,n){e.exports=n.p+"static/media/episode5.4fd8a9ff.jpg"},32:function(e,t,n){e.exports=n.p+"static/media/episode6.eea133cb.jpg"},34:function(e,t,n){e.exports=n(65)},39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),c=n.n(i),s=(n(39),n(40),n(1)),u=n(2),l=n(4),o=n.n(l),p=n(8),m=n(9),f=n(5),d=n(16),E=n.n(d),h=E.a.create({baseURL:"https://swapi.dev/api/"}),b=function(e){return E.a.get(e)},O=n(27),j=n.n(O),v=n(28),S=n.n(v),g=n(29),k=n.n(g),_=n(30),C=n.n(_),P=n(31),T=n.n(P),y=n(32),I=n.n(y),w={films:[],episodePlanets:[],episodeCharacters:[],episodeStarships:[],episodeVehicles:[],episodeSpecies:[],images:[{id:1,src:j.a},{id:2,src:S.a},{id:3,src:k.a},{id:4,src:C.a},{id:5,src:T.a},{id:6,src:I.a}]},x=function(e){return{type:"GET_FILMS",films:e}},N=function(e){return{type:"EPISODE_PLANETS",planet:e}},V=function(e){return{type:"EPISODE_CHARACTERS",character:e}},D=function(e){return{type:"EPISODE_STARHIPS",starship:e}},R=function(e){return{type:"EPISODE_VEHICLE",vehicle:e}},A=function(e){return{type:"EPISODE_SPECIES",species:e}},L=function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n,a){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a().episodePlanets||!a().episodePlanets.some((function(t){return t.url===e}))){t.next=4;break}return t.abrupt("return",void 0);case 4:return t.prev=4,t.next=7,b(e);case 7:r=t.sent,n(N(r.data)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,n){return t.apply(this,arguments)}}()},F=n(6),H=function(e){var t=e.title,n=e.name;return r.a.createElement("div",null,r.a.createElement("b",null,t,": "),r.a.createElement("a",null,n))},U=function(e){var t=e.p;return r.a.createElement("div",null,Object.keys(t).map((function(e){return r.a.createElement(H,{title:e,name:t[e]})})))},M=Object(u.b)((function(e){return{episodeCharacters:e.star.episodeCharacters}}),{})((function(e){var t=e.film,n=Object(F.a)(e,["film"]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)(""),p=Object(s.a)(o,2),m=p[0],f=p[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),h=E[0],b=E[1];return r.a.createElement("div",{className:"entity-item"},r.a.createElement("span",{onClick:function(){l(!u)}},"Characters "),u&&r.a.createElement("ul",{className:"entity-item__list"},n.episodeCharacters.filter((function(e){return t.characters.includes(e.url)})).map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return t=e.name,f(t),void b(!h);var t}},e.name),m===e.name&&h&&r.a.createElement(U,{p:e}))}))))})),B=Object(u.b)((function(e){return{episodePlanets:e.star.episodePlanets}}),{})((function(e){var t=e.film,n=Object(F.a)(e,["film"]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)(""),p=Object(s.a)(o,2),m=p[0],f=p[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),h=E[0],b=E[1];return r.a.createElement("div",{className:"entity-item"},r.a.createElement("span",{onClick:function(){l(!u)}},"Planets "),u&&r.a.createElement("ul",{className:"entity-item__list"},n.episodePlanets.filter((function(e){return t.planets.includes(e.url)})).map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return function(e){f(e),b(!h)}(e.name)}},e.name),m===e.name&&h&&r.a.createElement(U,{p:e}))}))))})),G=Object(u.b)((function(e){return{episodeStarships:e.star.episodeStarships}}),{})((function(e){var t=e.film,n=Object(F.a)(e,["film"]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)(""),p=Object(s.a)(o,2),m=p[0],f=p[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),h=E[0],b=E[1];return r.a.createElement("div",{className:"entity-item"},r.a.createElement("span",{onClick:function(){l(!u)}},"Starships "),u&&r.a.createElement("ul",{className:"entity-item__list"},n.episodeStarships.filter((function(e){return t.starships.includes(e.url)})).map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return t=e.name,f(t),void b(!h);var t}},e.name),m===e.name&&h&&r.a.createElement(U,{p:e}))}))))})),J=Object(u.b)((function(e){return{episodeVehicles:e.star.episodeVehicles}}),{})((function(e){var t=e.film,n=Object(F.a)(e,["film"]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)(""),p=Object(s.a)(o,2),m=p[0],f=p[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),h=E[0],b=E[1];return r.a.createElement("div",{className:"entity-item"},r.a.createElement("span",{onClick:function(){l(!u)}},"Vehicles "),u&&r.a.createElement("ul",{className:"entity-item__list"},n.episodeVehicles.filter((function(e){return t.vehicles.includes(e.url)})).map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return t=e.name,f(t),void b(!h);var t}},e.name),m===e.name&&h&&r.a.createElement(U,{p:e}))}))))})),W=Object(u.b)((function(e){return{episodeSpecies:e.star.episodeSpecies}}),{})((function(e){var t=e.film,n=Object(F.a)(e,["film"]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)(""),p=Object(s.a)(o,2),m=p[0],f=p[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),h=E[0],b=E[1];return r.a.createElement("div",{className:"entity-item"},r.a.createElement("span",{onClick:function(){l(!u)}},"Spacies "),u&&r.a.createElement("ul",{className:"entity-item__list"},n.episodeSpecies.filter((function(e){return t.species.includes(e.url)})).map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return t=e.name,f(t),void b(!h);var t}},e.name),m===e.name&&h&&r.a.createElement(U,{p:e}))}))))})),X=function(e){var t=e.film;return r.a.createElement("div",{className:"film-list__info"},r.a.createElement("div",null,r.a.createElement("b",null,"Description: "),t.opening_crawl),r.a.createElement("div",null,r.a.createElement("b",null,"Director: "),t.director),r.a.createElement("div",null,r.a.createElement("b",null,"Producer: "),t.producer),r.a.createElement("div",null,r.a.createElement("b",null,"Release date: "),t.release_date),r.a.createElement(M,{film:t}),r.a.createElement(B,{film:t}),r.a.createElement(G,{film:t}),r.a.createElement(J,{film:t}),r.a.createElement(W,{film:t}))},K=function(e){var t=e.film,n=Object(F.a)(e,["film"]);Object(a.useEffect)((function(){t.characters.map((function(e){return n.getEpisodeCharactersThunk(e)})),t.starships.map((function(e){return n.getEpisodeStarshipsThunk(e)})),t.vehicles.map((function(e){return n.getEpisodeVehiclesThunk(e)})),t.species.map((function(e){return n.getEpisodeSpeciesThunk(e)}))}),[]);return r.a.createElement("div",{className:"films-list__item"},r.a.createElement("div",{className:"films-list__photo"},n.images.filter((function(e){return e.id===t.episode_id})).map((function(e){return r.a.createElement("img",{src:e.src})}))),n.addInfoId!==t.episode_id?r.a.createElement("div",{className:"films-list__title"},r.a.createElement("span",{onClick:function(){return e=t.episode_id,void n.getFilmInfo(e);var e}},t.title)):r.a.createElement("div",{className:"films-list__title"},r.a.createElement("span",{onClick:function(){n.getFilmInfo(null)}},t.title)),n.addInfoId===t.episode_id?r.a.createElement(X,{film:t}):void 0)},$=Object(u.b)((function(e){return{films:e.star.films,images:e.star.images}}),{getFilmsThunk:function(){return function(){var e=Object(p.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("films/");case 3:n=e.sent,a=n.data.results.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0})),t(x(a)),a.map((function(e){return e.planets.map((function(e){return t(L(e))}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},getEpisodePlanetsThunk:L,getEpisodeCharactersThunk:function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a=t.sent,n(V(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getEpisodeStarshipsThunk:function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a=t.sent,n(D(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getEpisodeVehiclesThunk:function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a=t.sent,n(R(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getEpisodeSpeciesThunk:function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,b(e);case 3:a=t.sent,n(A(a.data));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(a.useState)(e.films),n=Object(s.a)(t,2),i=n[0],c=n[1],u=Object(a.useState)(null),l=Object(s.a)(u,2),o=l[0],p=l[1];Object(a.useEffect)((function(){e.getFilmsThunk()}),[]);var m=function(e){return p(e)};return Object(a.useEffect)((function(){c(e.films)}),[e.films]),r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{placeholder:"Search film",type:"text",onKeyUp:function(t){!function(t){var n=e.films.filter((function(e){return e.title.toUpperCase().includes(t)}));0==t.trim().length?c(e.films):c(n)}(t.currentTarget.value.toUpperCase())}}))),r.a.createElement("div",{className:"films-list"},i.map((function(t){return r.a.createElement(K,{key:t.episode_id,film:t,addInfoId:o,getFilmInfo:m,images:e.images,getEpisodePlanetsThunk:e.getEpisodePlanetsThunk,getEpisodeCharactersThunk:e.getEpisodeCharactersThunk,getEpisodeStarshipsThunk:e.getEpisodeStarshipsThunk,getEpisodeVehiclesThunk:e.getEpisodeVehiclesThunk,getEpisodeSpeciesThunk:e.getEpisodeSpeciesThunk})}))))})),q=function(){return r.a.createElement("div",{className:"app"},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(7),Q=n(33),Y=Object(z.c)({star:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FILMS":return Object(f.a)(Object(f.a)({},e),{},{films:t.films});case"EPISODE_PLANETS":return Object(f.a)(Object(f.a)({},e),{},{episodePlanets:e.episodePlanets.some((function(e){return e.name===t.planet.name}))?e.episodePlanets:[].concat(Object(m.a)(e.episodePlanets),[t.planet])});case"EPISODE_CHARACTERS":return Object(f.a)(Object(f.a)({},e),{},{episodeCharacters:e.episodeCharacters.some((function(e){return e.name===t.character.name}))?e.episodeCharacters:[].concat(Object(m.a)(e.episodeCharacters),[t.character])});case"EPISODE_STARHIPS":return Object(f.a)(Object(f.a)({},e),{},{episodeStarships:e.episodeStarships.some((function(e){return e.name===t.starship.name}))?e.episodeStarships:[].concat(Object(m.a)(e.episodeStarships),[t.starship])});case"EPISODE_VEHICLE":return Object(f.a)(Object(f.a)({},e),{},{episodeVehicles:e.episodeVehicles.some((function(e){return e.name===t.vehicle.name}))?e.episodeVehicles:[].concat(Object(m.a)(e.episodeVehicles),[t.vehicle])});case"EPISODE_SPECIES":return Object(f.a)(Object(f.a)({},e),{},{episodeSpecies:e.episodeSpecies.some((function(e){return e.name===t.species.name}))?e.episodeSpecies:[].concat(Object(m.a)(e.episodeSpecies),[t.species])});default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,ee=Object(z.e)(Y,Z(Object(z.a)(Q.a)));c.a.render(r.a.createElement(u.a,{store:ee},r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.82d9e78d.chunk.js.map