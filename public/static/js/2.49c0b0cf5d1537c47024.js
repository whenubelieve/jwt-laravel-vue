webpackJsonp([2,3],{27:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{style:{type:String,required:!1,"default":function(){return"primary"}},message:{type:String,required:!0},id:{type:String,required:!0},closeFunction:{type:Function,required:!0}},methods:{startTimer:function(){var e=this;setTimeout(function(){e.closeFunction(e.id)},5e3)}},computed:{classNames:function s(){var s=["alert"];return s.push("alert-"+this.style),s}},ready:function(){this.startTimer()}}},49:function(e,t){e.exports="<div :class=classNames> <button type=button class=close @click.prevent=closeFunction(id)> <span aria-hidden=true>&times;</span> </button> {{message}} </div> "},55:function(e,t,s){var r,n;r=s(27),n=s(49),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}});
//# sourceMappingURL=2.49c0b0cf5d1537c47024.js.map