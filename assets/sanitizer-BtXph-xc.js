var i={exports:{}};(function(n){i.exports=n()})(function(){var n={_entity:/[&<>"'/]/g,_entities:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#x2F;"},getEntity:function(e){return n._entities[e]},escapeHTML:function(e){for(var r="",t=0;t<e.length;t++)if(r+=e[t],t+1<arguments.length){var a=arguments[t+1]||"";r+=String(a).replace(n._entity,n.getEntity)}return r},createSafeHTML:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];var o=n.escapeHTML.apply(n,[e].concat(t));return{__html:o,toString:function(){return"[object WrappedHTMLObject]"},info:"This is a wrapped HTML object. See https://developer.mozilla.org/en-US/Firefox_OS/Security/Security_Automation for more."}},unwrapSafeHTML:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=r.map(function(o){return o.__html});return a.join("")}};return n});var u=i.exports;export{u as s};
