var e=window.Globals,t=e.react,n=e["@react-three/fiber"],r=e["@react-three/drei"],a=t.useEffect,o=t.useState,i=n.Canvas,c=n.createPortal,l=r.Environment,s=r.OrbitControls,w=r.useGLTF,u=(0,e.zustand.create)(function(){return{openOverlay:!1,baseURL:""}}),d=r.Sphere,m=r.MeshTransmissionMaterial;function R(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(d,null,window.React.createElement(m,{metalness:0,roughness:.1,transmission:1,thickness:2,color:"#00ff00"})))}function E(){var e=u(function(e){return e.baseURL}),t=w(e+"/geometry/sphere.glb");t.scene=t.scene.clone(!0);var n=[];return t.scene.traverse(function(e){e.material&&n.push(c(window.React.createElement("meshPhysicalMaterial",{color:"#ff00ff",transmission:1,roughness:0,metalness:0,thickness:2,side:2}),e))}),window.React.createElement(window.React.Fragment,null,n,window.React.createElement("group",{onClick:function(){u.setState({openOverlay:!u.getState().openOverlay})}},window.React.createElement("primitive",{object:t.scene})))}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"155"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="155"),exports.HTMLOverlay=function(){var e=u(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:" backdrop-blur-lg p-5 bg-gray-800 bg-opacity-10 text-white rounded-2xl  border-2 border-gray-800",style:{position:"absolute",top:"50%",right:"50%"}},"HTML Overlay"))},exports.Preview=function(e){var t=e.smartObject,n=void 0===t?null:t,r=e.htmlOverlay,a=void 0===r?null:r,o=u(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(i,null,n,window.React.createElement(s,null),window.React.createElement(l,{background:!0,files:o+"/hdr/grass.hdr"})),a)},exports.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(R,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(E,null))))},exports.SwanLake=function(e){var t=e.children,n=e.baseURL,r=e.onAsyncPreload,i=void 0===r?function(){return Promise.resolve()}:r,c=e.preloader,l=void 0===c?null:c,s=e.onReady,w=void 0===s?function(){}:s,d=o(!1),m=d[0],R=d[1];return a(function(){u.setState({baseURL:n}),i().then(function(){w(),R(!0)})},[n]),m?t:l};
