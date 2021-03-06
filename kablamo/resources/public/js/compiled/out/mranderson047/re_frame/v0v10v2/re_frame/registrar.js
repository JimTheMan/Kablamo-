// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"cofx","cofx",2013202907),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null], null), null);
mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler = (function mranderson047$re_frame$v0v10v2$re_frame$registrar$get_handler(var_args){
var G__41029 = arguments.length;
switch (G__41029) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler),kind);
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler),kind),id);
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id);
if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__28274__auto__ = required_QMARK_;
if(cljs.core.truth_(and__28274__auto__)){
return (handler == null);
} else {
return and__28274__auto__;
}
})())){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join('')," handler registered for: ",id);
} else {
}
} else {
}

return handler;
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;

mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler = (function mranderson047$re_frame$v0v10v2$re_frame$registrar$register_handler(kind,id,handler_fn){
if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id,false))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''),"handler for:",id);
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers = (function mranderson047$re_frame$v0v10v2$re_frame$registrar$clear_handlers(var_args){
var G__41032 = arguments.length;
switch (G__41032) {
case 0:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

return cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id))){
return cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,id);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: can't clear",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''),"handler for",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),". Handler not found."].join(''));
}
});

mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=registrar.js.map?rel=1517200923830
