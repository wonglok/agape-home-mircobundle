!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).swan={})}(this,function(e){var n=window.Globals,t=n.react,r=n["@react-three/fiber"],a=n["@react-three/drei"],o=t.useEffect,i=t.useState,c=r.Canvas,l=r.createPortal,s=a.Environment,u=a.OrbitControls,w=a.useGLTF,d=(0,n.zustand.create)(function(){return{openOverlay:!1,baseURL:""}}),m=a.Sphere,f=a.MeshTransmissionMaterial;function R(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(m,null,window.React.createElement(f,{metalness:0,roughness:.1,transmission:1,thickness:2})))}function E(){var e=d(function(e){return e.baseURL}),n=w(e+"/geometry/sphere.glb");n.scene=n.scene.clone(!0);var t=[];return n.scene.traverse(function(e){e.material&&t.push(l(window.React.createElement("meshPhysicalMaterial",{color:"#ff00ff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,t,window.React.createElement("group",{onClick:function(){d.setState({openOverlay:!d.getState().openOverlay})}},window.React.createElement("primitive",{object:n.scene})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155"),e.HTMLOverlay=function(){var e=d(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:"",style:{position:"absolute",top:"0px",right:"0px"}},"HTML Overlay 123"))},e.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=d(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(c,null,t,window.React.createElement(u,null),window.React.createElement(s,{background:!0,files:o+"/hdr/grass.hdr"})),a)},e.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(R,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(E,null))))},e.SwanLake=function(e){var n=e.children,t=e.baseURL,r=e.onAsyncPreload,a=void 0===r?function(){return Promise.resolve()}:r,c=e.preloader,l=void 0===c?null:c,s=e.onReady,u=void 0===s?function(){}:s,w=i(!1),m=w[0],f=w[1];return o(function(){d.setState({baseURL:t}),a().then(function(){u(),f(!0)})},[t]),m?n:l}});
