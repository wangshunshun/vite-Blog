import{_ as T,d as I,u as x,a as j,r as C,b as K,w as M,c as r,e as P,f as c,g as Q,h as o,i,j as d,o as V,k as s,t as b,l as z,m as O,n as U,p as q,q as G,s as H,v as J,x as W,y as X,z as Y}from"./index.8fa13d8f.js";const Z=u=>(J("data-v-a798a668"),u=u(),W(),u),$={class:"login-container columnCC"},ee={class:"title-container"},se={class:"title text-center"},oe={class:"rowSC"},te={class:"svg-container"},ne=Z(()=>s("div",{class:"show-pwd"},null,-1)),ae={class:"rowSC flex-1"},le={class:"svg-container"},re={class:"tip-message"},ue=I({__name:"index",setup(u){const{settings:F}=x(),_=j().formRules,a=C({keyword:"wangss",password:"123456"}),f=C({otherQuery:{},redirect:""}),S=K(),B=e=>Object.keys(e).reduce((t,n)=>(n!=="redirect"&&(t[n]=e[n]),t),{});M(()=>S.query,e=>{e&&(f.redirect=e.redirect,f.otherQuery=B(e))},{immediate:!0});const p=r(!1),v=r(),w=r(),g=()=>{w.value.validate(e=>{p.value=!0,e&&D()})},N=P(),A=x(),D=()=>{X(a).then(({data:e})=>{Y("\u767B\u5F55\u6210\u529F"),A.setToken(e==null?void 0:e.jwtToken),N.push("/")}).catch(e=>{v.value=e==null?void 0:e.msg}).finally(()=>{p.value=!1})},l=r("password"),h=r(null),E=()=>{l.value==="password"?l.value="":l.value="password",G(()=>{h.value.focus()})};return(e,t)=>{const n=H,y=c("el-input"),k=c("el-form-item"),L=c("el-button"),R=c("el-form");return V(),Q("div",$,[o(R,{ref_key:"refLoginForm",ref:w,class:"login-form",model:a,rules:d(_)},{default:i(()=>[s("div",ee,[s("h3",se,b(d(F)),1)]),o(k,{prop:"keyword",rules:d(_).isNotNull("usename\u4E0D\u80FD\u4E3A\u7A7A")},{default:i(()=>[s("div",oe,[s("span",te,[o(n,{"icon-class":"user"})]),o(y,{modelValue:a.keyword,"onUpdate:modelValue":t[0]||(t[0]=m=>a.keyword=m),placeholder:"\u7528\u6237\u540D(admin)"},null,8,["modelValue"]),ne])]),_:1},8,["rules"]),o(k,{prop:"password",rules:d(_).isNotNull("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")},{default:i(()=>[s("div",ae,[s("span",le,[o(n,{"icon-class":"password"})]),(V(),z(y,{key:l.value,ref_key:"refPassword",ref:h,modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=m=>a.password=m),type:l.value,name:"password",placeholder:"password(123456)",onKeyup:O(g,["enter"])},null,8,["modelValue","type","onKeyup"])),s("span",{class:"show-pwd",onClick:E},[o(n,{"icon-class":l.value==="password"?"eye":"eye-open"},null,8,["icon-class"])])])]),_:1},8,["rules"]),s("div",re,b(v.value),1),o(L,{loading:p.value,type:"primary",class:"login-btn",size:"default",onClick:U(g,["prevent"])},{default:i(()=>[q(" Login ")]),_:1},8,["loading","onClick"])]),_:1},8,["model","rules"])])}}});var ie=T(ue,[["__scopeId","data-v-a798a668"]]);export{ie as default};
