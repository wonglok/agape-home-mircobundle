!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).swan={})}(this,function(e){var n=window.Globals,t=n.react,r=n.zustand,a=n["@react-three/fiber"],o=n["@react-three/drei"],i=o.Sphere,c=o.MeshTransmissionMaterial;function l(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(i,null,window.React.createElement(c,{metalness:0,roughness:.1,transmission:1,thickness:2})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155");var s=t.useEffect,u=t.useState,w=a.Canvas,d=a.createPortal,m=o.Environment,f=o.OrbitControls,R=o.useGLTF,E=(0,r.create)(function(){return{openOverlay:!1,baseURL:""}});function p(){var e=E(function(e){return e.baseURL}),n=R(e+"/geometry/sphere.glb");n.scene=n.scene.clone(!0);var t=[];return n.scene.traverse(function(e){e.material&&t.push(d(window.React.createElement("meshPhysicalMaterial",{color:"#ff00ff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,t,window.React.createElement("group",{onClick:function(){E.setState({openOverlay:!E.getState().openOverlay})}},window.React.createElement("primitive",{object:n.scene})))}e.HTMLOverlay=function(){var e=E(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:"",style:{position:"absolute",top:"0px",right:"0px"}},"HTML Overlay 123"))},e.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=E(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(w,null,t,window.React.createElement(f,null),window.React.createElement(m,{background:!0,files:o+"/hdr/grass.hdr"})),a)},e.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(l,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(p,null))))},e.SwanLake=function(e){var n=e.children,t=e.baseURL,r=e.onAsyncPreload,a=void 0===r?function(){return Promise.resolve()}:r,o=e.preloader,i=void 0===o?null:o,c=e.onReady,l=void 0===c?function(){}:c,w=u(!1),d=w[0],m=w[1];return s(function(){E.setState({baseURL:t}),a().then(function(){l(),m(!0)})},[t]),d?n:i}});
//# sourceMappingURL=main.umd.js.map
