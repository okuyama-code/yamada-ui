import{a as E}from"./jsx-runtime-5BUNAZ9W.js";import{r as s}from"./index-4g5l5LRQ.js";import{B as f}from"./box-Z4BFrL4e.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-RgfxYELV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const v=["keypress","mousemove","touchmove","click","scroll"],w={events:v,initialState:!0},h=(e,u)=>{const{events:r,initialState:m}={...w,...u},[p,i]=s.useState(m),o=s.useRef(null);return s.useEffect(()=>{const a=()=>{i(!1),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{i(!0)},e)};return r.forEach(n=>document.addEventListener(n,a)),()=>{r.forEach(n=>document.removeEventListener(n,a))}},[r,e]),p},D={title:"Hooks / useIdle"},t=()=>{const e=h(2e3);return E(f,{bg:e?"blue.500":"red.500",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:["Current state: ",e?"idle":"not idle"]})};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const idle = useIdle(2000);
  return <Box bg={idle ? "blue.500" : "red.500"} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      Current state: {idle ? "idle" : "not idle"}
    </Box>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const L=["basic"];export{L as __namedExportsOrder,t as basic,D as default};
