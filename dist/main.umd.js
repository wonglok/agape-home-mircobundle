!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).swan={})}(this,function(e){var n=window.Globals,t=n.react,r=n["@react-three/fiber"],a=n["@react-three/drei"],o=a.Sphere,i=a.MeshTransmissionMaterial;function c(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(o,null,window.React.createElement(i,{metalness:0,roughness:.1,transmission:1,thickness:2})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155");var l=(0,n.zustand.create)(function(){return{baseURL:""}}),s=r.createPortal,u=a.useGLTF;function w(){var e=l(function(e){return e.baseURL}),n=u(e+"/geometry/sphere.glb");n.scene=n.scene.clone(!0);var t=[];return n.scene.traverse(function(e){e.material&&t.push(s(window.React.createElement("meshPhysicalMaterial",{color:"#ffffff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,t,window.React.createElement("primitive",{object:n.scene}))}var d=t.useEffect,m=t.useState,f=a.useGLTF,R=a.OrbitControls,E=a.Environment,p=r.Canvas;e.HTMLOverlay=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("div",{className:"",style:{position:"absolute",top:"0px",right:"0px"}},"HTML Overlay Yo"))},e.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=l(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(p,null,t,window.React.createElement(R,null),window.React.createElement(E,{background:!0,files:o+"/hdr/grass.hdr"})),a)},e.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(c,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(w,null))))},e.SwanLake=function(e){var n=e.children,t=e.baseURL,r=e.onAsyncPreload,a=void 0===r?function(){return Promise.resolve()}:r,o=e.onReady,i=void 0===o?function(){}:o,c=m(!1),s=c[0],u=c[1];return d(function(){l.setState({baseURL:t}),f.preload(t+"/geometry/sphere.glb"),a().then(function(){i(),u(!0)})},[t]),s?n:null}});
//# sourceMappingURL=main.umd.js.map
