var e=window.Globals,n=e.react,t=e["@react-three/fiber"],r=e["@react-three/drei"],a=n.useEffect,o=n.useState,i=t.Canvas,c=t.createPortal,l=r.Environment,s=r.OrbitControls,w=r.useGLTF,u=(0,e.zustand.create)(function(){return{openOverlay:!1,baseURL:""}}),d=r.Sphere,m=r.MeshTransmissionMaterial;function R(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(d,null,window.React.createElement(m,{metalness:0,roughness:.1,transmission:1,thickness:2})))}function E(){var e=u(function(e){return e.baseURL}),n=w(e+"/geometry/sphere.glb");n.scene=n.scene.clone(!0);var t=[];return n.scene.traverse(function(e){e.material&&t.push(c(window.React.createElement("meshPhysicalMaterial",{color:"#ff00ff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,t,window.React.createElement("group",{onClick:function(){u.setState({openOverlay:!u.getState().openOverlay})}},window.React.createElement("primitive",{object:n.scene})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155"),exports.HTMLOverlay=function(){var e=u(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:"",style:{position:"absolute",top:"0px",right:"0px"}},"HTML Overlay 123"))},exports.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=u(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(i,null,t,window.React.createElement(s,null),window.React.createElement(l,{background:!0,files:o+"/hdr/grass.hdr"})),a)},exports.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(R,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(E,null))))},exports.SwanLake=function(e){var n=e.children,t=e.baseURL,r=e.onAsyncPreload,i=void 0===r?function(){return Promise.resolve()}:r,c=e.preloader,l=void 0===c?null:c,s=e.onReady,w=void 0===s?function(){}:s,d=o(!1),m=d[0],R=d[1];return a(function(){u.setState({baseURL:t}),i().then(function(){w(),R(!0)})},[t]),m?n:l};
