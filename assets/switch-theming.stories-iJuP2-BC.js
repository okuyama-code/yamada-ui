import{j as e,a as r}from"./jsx-runtime-5BUNAZ9W.js";import{U as g}from"./ui-provider-gGtYhuBN.js";import{e as S}from"./extend-theme-qFalPU1t.js";import{e as y}from"./extend-config-_d0ZejK3.js";import{u}from"./theme-provider-3UPjg8SK.js";import{V as T,H as B}from"./stack-M2-zZJf2.js";import{B as n}from"./button-Alg8QOdJ.js";import{C as k}from"./container-jHkiijvt.js";import{H as f}from"./heading-WhtNTy7J.js";import{W as i}from"./flex-jmkNAMLJ.js";import{B as c}from"./badge-lx9ZEoFs.js";import{T as m}from"./tag-IT_RJBHt.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-ZuEHyfRb.js";import"./factory-RgfxYELV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-04hJfOUz.js";import"./motion-heeYkzTb.js";import"./loading-provider-p6JwBb_I.js";import"./index-fL4zC2Ts.js";import"./Combination-8oCz4vin.js";import"./loading-XllCM6KN.js";import"./index-C-jqR-WU.js";import"./index-l_LhqSw0.js";import"./index-DFTBuhAG.js";import"./icon-_8-FzyzA.js";import"./forward-ref-A-8Arhkk.js";import"./motion-cwWH0vUb.js";import"./index-eMn_GZVX.js";import"./container-portal-tuyQ2qQu.js";import"./index-jmm5gWkb.js";import"./notice-kaWAOYbR.js";import"./alert-x96j3C30.js";import"./use-component-style-w5CKuE2B.js";import"./close-button-5sZ9VOrD.js";import"./use-ripple-GML7p_Ge.js";import"./index-_SDfwtGE.js";import"./index-oGd_MAfO.js";const te={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=y({initialThemeScheme:"pink"});return e(g,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    themeSchemes: {
      pink: {
        semantics: {
          colors: {
            primary: "pink.500",
            secondary: "violet.500"
          },
          colorSchemes: {
            primary: "pink",
            secondary: "violet"
          }
        }
      },
      purple: {
        semantics: {
          colors: {
            primary: "purple.500",
            secondary: "teal.500"
          },
          colorSchemes: {
            primary: "purple",
            secondary: "teal"
          }
        }
      },
      green: {
        semantics: {
          colors: {
            primary: "green.500",
            secondary: "cyan.500"
          },
          colorSchemes: {
            primary: "green",
            secondary: "cyan"
          }
        }
      }
    }
  })();
  const config = extendConfig({
    initialThemeScheme: "pink"
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme="gray" onClick={() => changeThemeScheme("base")}>
            Base Theme
          </Button>
          <Button colorScheme="pink" onClick={() => changeThemeScheme("pink")}>
            Pink Theme
          </Button>
          <Button colorScheme="purple" onClick={() => changeThemeScheme("purple")}>
            Purple Theme
          </Button>
          <Button colorScheme="green" onClick={() => changeThemeScheme("green")}>
            Green Theme
          </Button>
        </HStack>

        <Container p="md" gap="md" rounded="md" border="1px solid" borderColor="inherit" boxShadow="md">
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap="md">
            <Badge colorScheme="primary">Primary</Badge>
            <Badge colorScheme="secondary">Secondary</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="danger">Danger</Badge>
          </Wrap>

          <Wrap gap="md">
            <Tag colorScheme="primary">Primary</Tag>
            <Tag colorScheme="secondary">Secondary</Tag>
            <Tag colorScheme="warning">Warning</Tag>
            <Tag colorScheme="danger">Danger</Tag>
          </Wrap>

          <Wrap gap="md">
            <Button colorScheme="primary" size="sm">
              Primary
            </Button>
            <Button colorScheme="secondary" size="sm">
              Secondary
            </Button>
            <Button colorScheme="warning" size="sm">
              Warning
            </Button>
            <Button colorScheme="danger" size="sm">
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>;
  };
  return <UIProvider theme={theme} config={config}>
      <App />
    </UIProvider>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const pe=["basic"];export{pe as __namedExportsOrder,a as basic,te as default};
