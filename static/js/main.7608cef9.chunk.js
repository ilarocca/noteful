(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){},220:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(78),c=n.n(r),l=n(20),i=n(21),s=n(225),u=(n(90),n(92),n(40)),d=n(41),m=n(4),f=n(5),h=n(7),p=n(6),v=n(8),N=n(223),E=n(103),b=n(11),j=n(224),O=n(81),y=n(28);n(96);function g(e){e.tag,e.className,e.childrenm;var t=Object(y.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(O.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}g.defaultProps={tag:"a"};var _=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},P=(n(98),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,n=void 0===t?[]:t,a=e.notes,r=void 0===a?[]:a;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(j.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length}(r,e.id)),e.name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(g,{tag:E.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(o.a.Component));P.contextType=_;n(104);var I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.context,n=t.notes,a=t.folders,r=this.props.match.params.noteId,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(a,(k(n,r)||{}).folderId);return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(g,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(b.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),c&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},c.name))}}]),t}(o.a.Component);I.defaultProps={history:{goBack:function(){}},match:{params:{}}},I.contextType=_;var D=n(80),A={API_ENDPOINT:"http://localhost:9090"},x=(n(208),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.id;fetch("".concat(A.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(){n.context.deleteNote(t),n.props.onDeleteNote(t)}).catch(function(e){console.error({error:e})})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,a=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(E.a,{to:"/note/".concat(n)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(b.a,{icon:"trash-alt"})," remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(D.format)(a,"Do MMM YYYY")))))}}]),t}(o.a.Component));x.defaultProps={onDeleteNote:function(){}},x.contextType=_;n(210);var C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.match.params.folderId,t=this.context.notes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folderId===t}):e}(void 0===t?[]:t,e);return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(x,{id:e.id,name:e.name,modified:e.modified}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(g,{tag:E.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}}]),t}(o.a.Component);C.defaultProps={match:{params:{}}},C.contextType=_;n(212);var S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e){n.props.history.push("/")},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e,n=this.props.match.params.noteId,a=k(t,n)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(x,{id:a.id,name:a.name,modified:a.modified,onDeleteNote:this.handleDeleteNote}),o.a.createElement("div",{className:"NotePageMain__content"},a.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}}]),t}(o.a.Component);S.defaultProps={match:{params:{}}},S.contextType=_,S.defaultProps={note:{content:""}};n(214);function T(e){var t=e.className,n=Object(y.a)(e,["className"]);return o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},n))}n(216);var F=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t={name:e.target["folder-name"].value};fetch("".concat(A.API_ENDPOINT,"/folders"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addFolder(e),n.props.history.push("/folder/".concat(e.id))}).catch(function(e){console.error({error:e})})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"AddFolder"},o.a.createElement("h2",null,"Create a folder"),o.a.createElement(T,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"folder-name-input",name:"folder-name"})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Add folder"))))}}]),t}(a.Component);F.defaultProps={history:{push:function(){}}},F.contextType=_;n(218);var w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t={name:e.target["note-name"].value,content:e.target["note-content"].value,folderId:e.target["note-folder-id"].value,modified:new Date};fetch("".concat(A.API_ENDPOINT,"/notes"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addNote(e),n.props.history.push("/folder/".concat(e.folderId))}).catch(function(e){console.error({error:e})})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context.folders,t=void 0===e?[]:e;return o.a.createElement("section",{className:"AddNote"},o.a.createElement("h2",null,"Create a note"),o.a.createElement(T,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"note-name-input",name:"note-name"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-content-input"},"Content"),o.a.createElement("textarea",{id:"note-content-input",name:"note-content"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-folder-select"},"Folder"),o.a.createElement("select",{id:"note-folder-select",name:"note-folder-id"},o.a.createElement("option",{value:null},"..."),t.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Add note"))))}}]),t}(a.Component);w.defaultProps={history:{push:function(){}}},w.contextType=_;var M=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h2",null,"Sorry, an error occured. Please try again."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component),L=(n(220),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},n.handleDeleteNote=function(e){n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.handleAddFolder=function(e){n.setState({folders:Object(d.a)(n.state.folders).concat([e])})},n.handleAddNote=function(e){n.setState({notes:Object(d.a)(n.state.notes).concat([e])})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(A.API_ENDPOINT,"/notes")),fetch("".concat(A.API_ENDPOINT,"/folders"))]).then(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then(function(e){return Promise.reject(e)}):n.json().then(function(e){return Promise.reject(e)})}).then(function(t){var n=Object(u.a)(t,2),a=n[0],o=n[1];e.setState({notes:a,folders:o})}).catch(function(e){console.error({error:e})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return o.a.createElement(N.a,{exact:!0,key:e,path:e,component:P})}),o.a.createElement(N.a,{path:"/note/:noteId",component:I}),o.a.createElement(N.a,{path:"/add-folder",component:I}),o.a.createElement(N.a,{path:"/add-note",component:I}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return o.a.createElement(N.a,{exact:!0,key:e,path:e,component:C})}),o.a.createElement(N.a,{path:"/note/:noteId",component:S}),o.a.createElement(N.a,{path:"/add-folder",component:F}),o.a.createElement(N.a,{path:"/add-note",component:w}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote,addFolder:this.handleAddFolder,addNote:this.handleAddNote};return o.a.createElement(_.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement(M,null,o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes())),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(E.a,{to:"/"},"Noteful")," ",o.a.createElement(b.a,{icon:"check-double"}))),o.a.createElement(M,null,o.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(a.Component));l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(s.a,null,o.a.createElement(L,null)),document.getElementById("root"))},82:function(e,t,n){e.exports=n(222)},92:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){}},[[82,2,1]]]);
//# sourceMappingURL=main.7608cef9.chunk.js.map