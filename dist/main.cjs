var e=window.Globals,n=e.react,t=n.useEffect,r=n.useState,a=n.useCallback,o=e["@react-three/fiber"],i=e["@react-three/drei"],c=i.Sphere,l=i.MeshTransmissionMaterial;function s(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(c,null,window.React.createElement(l,{metalness:0,roughness:.1,transmission:1,thickness:2})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155");var w=(0,e.zustand.create)(function(){return{baseURL:""}}),u=o.createPortal,d=i.useGLTF;function m(){var e=w(function(e){return e.baseURL}),n=d(e+"/geometry/sphere.glb");n.scene=n.scene.clone(!0);var t=[];return n.scene.traverse(function(e){e.material&&t.push(u(window.React.createElement("meshPhysicalMaterial",{color:"#ffffff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,t,window.React.createElement("primitive",{object:n.scene}))}var R=i.useGLTF,E=i.OrbitControls,f=i.Environment,v=o.Canvas;exports.HTMLOverlay=function(){var e=a(function(){});return window.React.createElement(window.React.Fragment,null,window.React.createElement("div",{className:"",onClick:e,style:{position:"absolute",top:"0px",right:"0px"}},"HTML Overlay Yo"))},exports.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=w(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(v,null,t,window.React.createElement(E,null),window.React.createElement(f,{background:!0,files:o+"/hdr/grass.hdr"})),a)},exports.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(s,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(m,null))))},exports.SwanLake=function(e){var n=e.children,a=e.baseURL,o=e.onAsyncPreload,i=void 0===o?function(){return Promise.resolve()}:o,c=e.onReady,l=void 0===c?function(){}:c,s=r(!1),u=s[0],d=s[1];return t(function(){w.setState({baseURL:a}),R.preload(a+"/geometry/sphere.glb"),i().then(function(){l(),d(!0)})},[a]),u?n:null};
//# sourceMappingURL=main.cjs.map
