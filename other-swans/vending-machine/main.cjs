var e=window.Globals,t=e.react,n=e["@react-three/drei"],r=t.useEffect,a=t.useState,o=e["@react-three/fiber"].Canvas,c=n.Environment,i=n.OrbitControls,l=n.useGLTF,s=(0,e.zustand.create)(function(){return{openOverlay:!1,baseURL:""}}),u=n.Sphere,w=n.MeshTransmissionMaterial;function d(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(u,null,window.React.createElement(w,{metalness:0,roughness:.1,transmission:1,thickness:1.3,color:"#ffffff"})))}var m=n.CubeCamera,f=n.MeshTransmissionMaterial;function R(){var e=s(function(e){return e.baseURL}),t=l(e+"/geometry/box.glb");t.scene=t.scene.clone(!0);var n=!1;return t.scene.traverse(function(e){e.geometry&&!n&&(n=e.geometry)}),window.React.createElement(window.React.Fragment,null,[],window.React.createElement("group",{onClick:function(){s.setState({openOverlay:!s.getState().openOverlay})}},window.React.createElement(m,null,function(e){return window.React.createElement("mesh",{geometry:n},window.React.createElement(f,{transmission:1,envMap:e,thickness:2,roughness:.13,metalness:0,reflectivity:.5,chromaticAberration:.1,color:"#ffffff"}))})))}exports.HTMLOverlay=function(){var e=s(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:" backdrop-blur-lg p-5 bg-gray-800 bg-opacity-10 text-white rounded-2xl  border-2 border-gray-800",style:{position:"absolute",top:"50%",right:"50%"}},"HTML Overlay"))},exports.Preview=function(e){var t=e.smartObject,n=void 0===t?null:t,r=e.htmlOverlay,a=void 0===r?null:r,l=s(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(o,null,n,window.React.createElement(i,null),window.React.createElement(c,{background:!0,files:l+"/hdr/grass.hdr"})),a)},exports.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(d,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(R,null))))},exports.SwanLake=function(e){var t=e.children,n=e.baseURL,o=e.onAsyncPreload,c=void 0===o?function(){return Promise.resolve()}:o,i=e.preloader,l=void 0===i?null:i,u=e.onReady,w=void 0===u?function(){}:u,d=a(!1),m=d[0],f=d[1];return r(function(){s.setState({baseURL:n}),c().then(function(){w(),f(!0)})},[n]),m?t:l};
