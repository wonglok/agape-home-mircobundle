!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).swan={})}(this,function(e){var n=window.Globals,t=n.react,r=n["@react-three/drei"],a=t.useEffect,o=t.useState,i=n["@react-three/fiber"].Canvas,c=r.Environment,l=r.OrbitControls,s=r.useGLTF,u=(0,n.zustand.create)(function(){return{openOverlay:!1,baseURL:""}}),w=r.Sphere,d=r.MeshTransmissionMaterial;function f(){return window.React.createElement(window.React.Fragment,null,window.React.createElement(w,null,window.React.createElement(d,{metalness:0,roughness:.1,transmission:1,thickness:1.3,color:"#ffffff"})))}var m=r.CubeCamera,R=r.MeshTransmissionMaterial;function g(){var e=u(function(e){return e.baseURL}),n=s(e+"/geometry/box.glb");n.scene=n.scene.clone(!0);var t=!1;return n.scene.traverse(function(e){e.geometry&&!t&&(t=e.geometry)}),window.React.createElement(window.React.Fragment,null,[],window.React.createElement("group",{onClick:function(){u.setState({openOverlay:!u.getState().openOverlay})}},window.React.createElement(m,null,function(e){return window.React.createElement("mesh",{geometry:t},window.React.createElement(R,{transmission:1,envMap:e,thickness:2,roughness:.13,metalness:0,reflectivity:.5,chromaticAberration:.1,color:"#ffffff"}))})))}e.HTMLOverlay=function(){var e=u(function(e){return e.openOverlay});return window.React.createElement(window.React.Fragment,null,e&&window.React.createElement("div",{className:" backdrop-blur-lg p-5 bg-gray-800 bg-opacity-10 text-white rounded-2xl  border-2 border-gray-800",style:{position:"absolute",top:"50%",right:"50%"}},"HTML Overlay"))},e.Preview=function(e){var n=e.smartObject,t=void 0===n?null:n,r=e.htmlOverlay,a=void 0===r?null:r,o=u(function(e){return e.baseURL});return window.React.createElement(window.React.Fragment,null,window.React.createElement(i,null,t,window.React.createElement(l,null),window.React.createElement(c,{background:!0,files:o+"/hdr/grass.hdr"})),a)},e.SmartObject=function(){return window.React.createElement(window.React.Fragment,null,window.React.createElement("group",null,window.React.createElement("group",{position:[1,0,0]},window.React.createElement(f,null)),window.React.createElement("group",{position:[-1,0,0]},window.React.createElement(g,null))))},e.SwanLake=function(e){var n=e.children,t=e.baseURL,r=e.onAsyncPreload,i=void 0===r?function(){return Promise.resolve()}:r,c=e.preloader,l=void 0===c?null:c,s=e.onReady,w=void 0===s?function(){}:s,d=o(!1),f=d[0],m=d[1];return a(function(){u.setState({baseURL:t}),i().then(function(){w(),m(!0)})},[t]),f?n:l}});
