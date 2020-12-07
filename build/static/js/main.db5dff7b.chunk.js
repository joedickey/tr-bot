(this["webpackJsonptr-bot"]=this["webpackJsonptr-bot"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(8),r=n.n(c),s=n(25),i=n.n(s),l=n(12),o=(n(32),n(0)),p=n(1),u=n(3),h=n(2),j=(n(33),r.a.createContext({patterns:[],patternSelect:0,currentPatternId:null,bpm:120,volume:100,kickSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],snareSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh1Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh2Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],clapSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],percSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],currentStep:null,updatePatternSelect:function(){},updateBpm:function(){},updateVolume:function(){},updateStep:function(){},playSequencer:function(){},stopSequencer:function(){},savePattern:function(){},deletePattern:function(){},clearSteps:function(){}})),d=n(9),b=n(11),m=(n(43),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"LandingPage",children:[Object(a.jsx)("h1",{children:"Welcome to TR\u2011BOT"}),Object(a.jsxs)("div",{className:"LandingPage_intro",children:[Object(a.jsx)("p",{children:"The TR-BOT is a drum machine application that allows a user to create musical percussion tracks in their browser. The TR-BOT's name is inspired by the iconic line of Roland's hardware drum machines (i.e. TR-808, TR-909, TR-606) and by default, the app supplies 6 individual drum sounds that include:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Kick drum (Kick)"}),Object(a.jsx)("li",{children:"Snare drum (Snare)"}),Object(a.jsx)("li",{children:"High Hat 1 (HH1)"}),Object(a.jsx)("li",{children:"High Hat 2 (HH2)"}),Object(a.jsx)("li",{children:"Handclap (Clap)"}),Object(a.jsx)("li",{children:"Percussion (Perc)"})]}),Object(a.jsx)("p",{children:"The grid is that of a 16-step sequencer where each square (or step) represents a subdivision of musical time from left to right. The user is encouraged to experiment with building their own unique patterns by clicking any of the steps on or off."}),Object(a.jsx)("p",{children:"Now let's get to making some music!"})]}),Object(a.jsx)(l.b,{to:"/trbot",children:Object(a.jsx)("button",{children:"Start"})})]})}}]),n}(c.Component)),S=(n(49),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"CreateAccount",children:[Object(a.jsx)("h1",{children:"Create Account:"}),Object(a.jsxs)("form",{className:"CreateAccount_form",children:[Object(a.jsxs)("div",{className:"CreateAccount_input",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(a.jsx)("input",{type:"text",id:"username",name:"username"})]}),Object(a.jsxs)("div",{className:"CreateAccount_input",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(a.jsx)("input",{type:"password",id:"password",name:"password"})]}),Object(a.jsxs)("div",{className:"CreateAccount_input",children:[Object(a.jsx)("label",{htmlFor:"confirm_password",children:"Confirm Password:"}),Object(a.jsx)("input",{type:"password",id:"confirm_password",name:"confirm_password"})]}),Object(a.jsxs)("div",{className:"CreateAccount_buttons",children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("button",{type:"submit",children:"Submit"})}),Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("button",{children:"Cancel"})})]})]})]})}}]),n}(c.Component));n(50),n(51);function O(e){return e.message?Object(a.jsx)("div",{className:"ValidateNameEntry_error",children:e.message}):Object(a.jsx)(a.Fragment,{})}var f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",touched:!1},e.handleSubmit=function(t,n){t.preventDefault(),n({name:t.target.pattern_name.value,user_id:0,kick_steps:e.context.kickSteps,snare_steps:e.context.snareSteps,hh1_steps:e.context.hh1Steps,hh2_steps:e.context.hh2Steps,clap_steps:e.context.clapSteps,perc_steps:e.context.percSteps}),e.props.history.push("/trbot")},e.changeNameState=function(t){e.setState({name:t.target.value,touched:!0})},e}return Object(p.a)(n,[{key:"validateNameEntry",value:function(){var e=this.state.name.trim(),t=this.context.patterns.map((function(e){return e.name.toLowerCase()}));return 0===e.length&&this.state.touched?"Name is required":-1!==t.indexOf(e.toLowerCase())?"This name already exists":void 0}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"SavePattern",children:[Object(a.jsx)("h2",{children:"Save Pattern:"}),Object(a.jsx)(j.Consumer,{children:function(t){var n=t.savePattern;return Object(a.jsxs)("form",{className:"SavePattern_form",onSubmit:function(t){return e.handleSubmit(t,n)},children:[Object(a.jsxs)("div",{className:"SavePattern_input",children:[Object(a.jsx)("label",{htmlFor:"pattern_name",children:"Pattern Name:"}),Object(a.jsx)("input",{type:"text",id:"pattern_name",name:"pattern_name",onChange:function(t){return e.changeNameState(t)},required:!0}),Object(a.jsx)(O,{message:e.validateNameEntry()})]}),Object(a.jsxs)("div",{className:"SavePattern_buttons",children:[Object(a.jsx)("button",{type:"submit",disabled:!e.state.touched||0===e.state.name.trim().length,children:"Submit"}),Object(a.jsx)(l.b,{to:"/trbot",children:Object(a.jsx)("button",{children:"Cancel"})})]})]})}})]})}}]),n}(c.Component);f.contextType=j;var v=f,x=(n(52),n(53),n.p+"static/media/trbotkick.9db94947.mp3"),k=n.p+"static/media/trbotsnare.baaf82bc.mp3",C=n.p+"static/media/trbothh1.25c30c65.mp3",y=n.p+"static/media/trbothh2.c5bc0aa4.mp3",g=n.p+"static/media/trbotclap.bd231468.mp3",N=n.p+"static/media/trbotperc.3d9c7643.mp3",P=new b.b({urls:{C4:x,D4:k,E4:C,F4:y,G4:g,A4:N},onload:function(){}}),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){b.c.stop(),b.c.cancel(),P.disconnect()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"Header",children:Object(a.jsx)("header",{children:Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("h1",{onClick:function(){return e.handleClick()},children:"TR-BOT"})})})})}}]),n}(c.Component),w=(n(54),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(e){e()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"TransportControls",children:Object(a.jsx)(j.Consumer,{children:function(t){var n=t.playSequencer,c=t.stopSequencer;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return e.handleClick(n)},children:"Play"}),Object(a.jsx)("button",{onClick:function(){return e.handleClick(c)},children:"Stop"})]})}})})}}]),n}(c.Component));w.contextType=j;var T=w,q=(n(55),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(e,t){t(e.target.value)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.context.volume,n=this.context.bpm;return Object(a.jsx)("div",{className:"TransportSliders",children:Object(a.jsx)(j.Consumer,{children:function(c){var r=c.updateBpm,s=c.updateVolume;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("label",{htmlFor:"volume",children:["Volume: ",t]}),Object(a.jsx)("input",{type:"range",id:"volume",className:"slider",name:"volume",min:"0",max:"100",defaultValue:100,onChange:function(t){return e.handleChange(t,s)}}),Object(a.jsxs)("label",{htmlFor:"bpm",children:["BPM: ",n]}),Object(a.jsx)("input",{type:"range",id:"bpm",className:"slider",name:"bpm",min:"40",max:"300",defaultValue:120,onChange:function(t){return e.handleChange(t,r)}})]})}})})}}]),n}(c.Component));q.contextType=j;var A=q,I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Transport",children:[Object(a.jsx)(T,{}),Object(a.jsx)(A,{})]})}}]),n}(c.Component),H=(n(56),n(62)),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t,n){e.stopPlayback();var a=t.target.value;n(a,e.context.patterns[a].id)},e.handleClick=function(t){t(e.context.currentPatternId)},e.stopPlayback=function(){b.c.stop(),b.c.cancel(),P.disconnect()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;function t(e){if(null===e)return Object(a.jsx)("option",{value:"",hidden:!0,children:"New Pattern"},"xxx")}var n=this.context.patterns.map((function(e,t){return Object(a.jsx)("option",{name:e.name,value:t,children:e.name},Object(H.a)())}));return Object(a.jsx)("div",{className:"PatternSelect",children:Object(a.jsx)(j.Consumer,{children:function(c){var r=c.updatePatternSelect,s=c.deletePattern;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"pattern",children:"Pattern:"}),Object(a.jsxs)("select",{id:"pattern",name:"pattern",value:null===e.context.patternSelect?"":e.context.patternSelect,disabled:null!=e.context.currentStep,onChange:function(t){return e.handleChange(t,r)},children:[t(e.context.currentPatternId),n]}),Object(a.jsx)("button",{className:"PatternSelect_button",onClick:function(){return e.stopPlayback()},children:Object(a.jsx)(l.b,{to:"savepattern",children:"Save"})}),Object(a.jsx)("button",{className:"PatternSelect_button",disabled:null===e.context.currentPatternId,onClick:function(){return e.handleClick(s)},children:"Delete"})]})}})})}}]),n}(c.Component);E.contextType=j;var F=E,B=(n(57),n(58),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(e,t,n,a){a(e.target.id,t,n)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.context.currentStep,n=this.props.instrument,c=this.props.instrumentSteps.map((function(c,r){return 1===c?Object(a.jsx)(j.Consumer,{children:function(c){var s=c.updateStep;return Object(a.jsx)("span",{className:"step clicked ".concat(t===r?"current_step":""),id:r,value:1,onClick:function(t){return e.handleClick(t,1,n,s)},children:"\xa0\xa0"},Object(H.a)())}},Object(H.a)()):0===c?Object(a.jsx)(j.Consumer,{children:function(c){var s=c.updateStep;return Object(a.jsx)("span",{className:"step ".concat(t===r?"current_step":""),id:r,value:0,onClick:function(t){return e.handleClick(t,0,n,s)},children:"\xa0\xa0"},Object(H.a)())}},Object(H.a)()):void 0}));return Object(a.jsx)("div",{className:"Instrument row",children:c})}}]),n}(c.Component));B.contextType=j;var R=B,V=(n(59),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"StepTracker",children:[Object(a.jsx)("span",{className:"tracker first",children:"1"},Object(H.a)()),Object(a.jsx)("span",{className:"tracker second",children:"5"},Object(H.a)()),Object(a.jsx)("span",{className:"tracker third",children:"9"},Object(H.a)()),Object(a.jsx)("span",{className:"tracker fourth",children:"13"},Object(H.a)())]})}}]),n}(c.Component)),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Sequencer",children:[Object(a.jsxs)("div",{className:"Sequencer_display",children:[Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"Kick"}),Object(a.jsx)(R,{instrumentSteps:this.context.kickSteps,instrument:"kick"})]}),Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"Snare"}),Object(a.jsx)(R,{instrumentSteps:this.context.snareSteps,instrument:"snare"})]}),Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"HH1"}),Object(a.jsx)(R,{instrumentSteps:this.context.hh1Steps,instrument:"hh1"})]}),Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"HH2"}),Object(a.jsx)(R,{instrumentSteps:this.context.hh2Steps,instrument:"hh2"})]}),Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"Clap"}),Object(a.jsx)(R,{instrumentSteps:this.context.clapSteps,instrument:"clap"})]}),Object(a.jsxs)("div",{className:"Sequencer_channel",children:[Object(a.jsx)("label",{children:"Perc"}),Object(a.jsx)(R,{instrumentSteps:this.context.percSteps,instrument:"perc"})]})]}),Object(a.jsx)("div",{className:"StepTracker_channel",children:Object(a.jsx)(V,{instrumentSteps:this.context.stepTracker,instrument:""})})]})}}]),n}(c.Component);D.contextType=j;var L=D,J=(n(60),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(e){e()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"ClearSteps",children:Object(a.jsx)(j.Consumer,{children:function(t){var n=t.clearSteps;return Object(a.jsx)("button",{onClick:function(){return e.handleClick(n)},children:"Clear Steps"})}})})}}]),n}(c.Component));J.contextType=j;var K=J,G=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Interface",children:[Object(a.jsx)(_,{}),Object(a.jsx)(I,{}),Object(a.jsx)(K,{}),Object(a.jsx)(L,{}),Object(a.jsx)(F,{})]})}}]),n}(c.Component),M="https://desolate-depths-97545.herokuapp.com/",U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).createInstrSteps=function(e){a.setState({kickSteps:a.state.patterns[e].kick_steps,snareSteps:a.state.patterns[e].snare_steps,hh1Steps:a.state.patterns[e].hh1_steps,hh2Steps:a.state.patterns[e].hh2_steps,clapSteps:a.state.patterns[e].clap_steps,percSteps:a.state.patterns[e].perc_steps})},a.updatePatternSelect=function(e,t){a.setState({patternSelect:e,currentPatternId:t},(function(){a.createInstrSteps(a.state.patternSelect)}))},a.updateBpm=function(e){a.setState({bpm:e}),b.c.bpm.value=a.state.bpm},a.updateVolume=function(e){a.setState({volume:e}),a.gainControl()},a.gainControl=function(){P.disconnect();var e=new b.a(a.state.volume/100<.05?0:a.state.volume/100);P.connect(e),e.toDestination()},a.updateStep=function(e,t,n){switch(n){case"kick":var c=a.state.kickSteps;c[e]=1-t;var r=c;a.setState({kickSteps:r});break;case"snare":var s=a.state.snareSteps;s[e]=1-t;var i=s;a.setState({snareSteps:i});break;case"hh1":var l=a.state.hh1Steps;l[e]=1-t;var o=l;a.setState({hh1Steps:o});break;case"hh2":var p=a.state.hh2Steps;p[e]=1-t;var u=p;a.setState({hh2Steps:u});break;case"clap":var h=a.state.clapSteps;h[e]=1-t;var j=h;a.setState({clapSteps:j});break;case"perc":var d=a.state.percSteps;d[e]=1-t;var b=d;a.setState({percSteps:b})}},a.playSequencer=function(){P.disconnect(),b.c.cancel(),a.gainControl();var e=[a.state.kickSteps,a.state.snareSteps,a.state.hh1Steps,a.state.hh2Steps,a.state.clapSteps,a.state.percSteps],t=["C4","D4","E4","F4","G4","A4"],n=0;a.setState({currentStep:-4}),b.d(),b.c.scheduleRepeat((function(a){for(var c=n%16,r=0;r<t.length;r++){var s=t[r];1===e[r][c]&&P.triggerAttackRelease([s],"16n",a)}n++}),"16n"),b.c.scheduleRepeat(a.transportVisual,"4n"),b.c.start()},a.transportVisual=function(){a.setState((function(e){return{currentStep:(e.currentStep+4)%16}}))},a.stopSequencer=function(){b.c.stop(),b.c.cancel(),P.disconnect(),a.setState({currentStep:null})},a.clearSteps=function(){a.setState({kickSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],snareSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh1Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh2Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],clapSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],percSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),a.stopSequencer()},a.savePattern=function(e){a.setState({currentStep:null});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("".concat(M,"api/patterns"),t).then((function(e){if(!e.ok)throw new Error("Could not save pattern");return e.json()})).catch((function(e){return e.message})),a.state.patterns.push(e),setTimeout((function(){fetch("".concat(M,"api/patterns")).then((function(e){if(!e.ok)throw new Error("Could not retrieve updated patterns");return e.json()})).then((function(e){a.setState({patterns:e,currentPatternId:null,patternSelect:null,kickSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],snareSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh1Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh2Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],clapSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],percSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]})})).catch((function(e){return e.message}))}),200)},a.deletePattern=function(e){a.stopSequencer(),a.setState({currentStep:null}),fetch("".concat(M,"api/patterns/").concat(e),{method:"DELETE"}).then((function(e){if(!e.ok)throw new Error("Could not delete pattern")})).catch((function(e){return e.message}));var t=a.state.patterns.filter((function(t){return t.id!==e})),n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a.setState({patterns:t,currentPatternId:void 0===t[a.state.patternSelect]?null:t[a.state.patternSelect].id,kickSteps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].kick_steps,snareSteps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].snare_steps,hh1Steps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].hh1_steps,hh2Steps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].hh2_steps,clapSteps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].clap_steps,percSteps:void 0===t[a.state.patternSelect]?n:t[a.state.patternSelect].perc_steps})},a.state={patterns:[],patternSelect:null,currentPatternId:null,bpm:120,volume:100,kickSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],snareSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh1Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hh2Steps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],clapSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],percSteps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],currentStep:null},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(M,"api/patterns")).then((function(e){if(!e.ok)throw new Error("Could not retrieve patterns");return e.json()})).then((function(t){e.setState({patterns:t}),t.length>0&&e.createInstrSteps(e.state.patternSelect)})).catch((function(e){return e.message}))}},{key:"render",value:function(){var e={patterns:this.state.patterns,patternSelect:this.state.patternSelect,currentPatternId:this.state.currentPatternId,bpm:this.state.bpm,volume:this.state.volume,kickSteps:this.state.kickSteps,snareSteps:this.state.snareSteps,hh1Steps:this.state.hh1Steps,hh2Steps:this.state.hh2Steps,clapSteps:this.state.clapSteps,percSteps:this.state.percSteps,currentStep:this.state.currentStep,updatePatternSelect:this.updatePatternSelect,updateBpm:this.updateBpm,updateVolume:this.updateVolume,updateStep:this.updateStep,playSequencer:this.playSequencer,stopSequencer:this.stopSequencer,savePattern:this.savePattern,deletePattern:this.deletePattern,clearSteps:this.clearSteps};return Object(a.jsx)("main",{className:"App",children:Object(a.jsxs)(j.Provider,{value:e,children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:m}),Object(a.jsx)(d.a,{exact:!0,path:"/createaccount",component:S}),Object(a.jsx)(d.a,{exact:!0,path:"/trbot",component:G}),Object(a.jsx)(d.a,{exact:!0,path:"/savepattern",component:v})]})})}}]),n}(c.Component);U.contextType=j;var W=U;n.p;i.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.db5dff7b.chunk.js.map