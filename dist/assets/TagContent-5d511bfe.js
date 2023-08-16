import{r as c,u as B,j as e}from"./index-cdfedc27.js";import{h as a}from"./tagContent.module-8d7be7f7.js";import{a as H,u as M}from"./axios-5cb6003d.js";import{c as $,a as o,o as K}from"./index.esm-5c2e1c12.js";import{g as _}from"./getApi-d3c1da7f.js";import{H as I}from"./Header-ee84e26e.js";import{F as P}from"./Footer-2132ffc3.js";import"./tekdi-logo-black-de0b41ff.js";const U=$().shape({contentName:o().required("*Field required"),language:o().required("*Field required"),theme:o().required("*Field required"),contentType:o().required("*Field required"),contentLink:o().required("*Field required"),description:o().required("*Field required"),compentencies:o().required("*Field required")}),z="https://onest-strapi.tekdinext.com/api",J=async(t,x)=>{console.log("Data in upload API"),console.log(t,"data",x);const d=t.contentName,j=t.language,m=t.theme,p=t.contentType,h=t.contentLink,g=t.description,b=t.compentencies,f=t.contentDomain,v=t.contentGoal;let u=!0;return await H.post(`${z}/fln-contents`,{data:{title:d,description:g,language:j,link:h,contentType:p,domain:f,goal:v,competency:b,themes:m,sourceOrganisation:"Tekdi",user_id:x}}).then(r=>{console.log(r),console.log(r.data),r.status===200?u=!0:u=!1}).catch(function(r){return console.log(r.response.data.error),0}),u},te=()=>{const[t,x]=c.useState(!1),[d,j]=c.useState();c.useState(!1);const[m,p]=c.useState(),[h,g]=c.useState(),[b,f]=c.useState(),v=B();c.useEffect(()=>{u()},[]);const u=async()=>{var i,N,y,F,T,k,S,C,D,L,q,w,A,G,R,E;const n=await _();j((F=(y=(N=(i=n==null?void 0:n.data)==null?void 0:i.result)==null?void 0:N.framework)==null?void 0:y.categories[0])==null?void 0:F.terms),p((C=(S=(k=(T=n==null?void 0:n.data)==null?void 0:T.result)==null?void 0:k.framework)==null?void 0:S.categories[1])==null?void 0:C.terms),g((w=(q=(L=(D=n==null?void 0:n.data)==null?void 0:D.result)==null?void 0:L.framework)==null?void 0:q.categories[2])==null?void 0:w.terms),f((E=(R=(G=(A=n==null?void 0:n.data)==null?void 0:A.result)==null?void 0:G.framework)==null?void 0:R.categories[3])==null?void 0:E.terms)},r=()=>{v("/mycourses")},{register:l,handleSubmit:O,formState:{errors:s}}=M({resolver:K(U)}),V=async n=>{console.log(n);const i=localStorage.getItem("userId");await J(n,i)==!0?x(!0):alert("Registeration failed")};return t?e.jsxs("div",{children:[e.jsx("div",{className:a.headerDiv,children:e.jsx(I,{})}),e.jsx("div",{className:a.outerdiv}),e.jsxs("div",{className:"container",style:{marginTop:"100px"},children:[e.jsx("h2",{style:{color:"#0F75BC"},children:"Content added successfully."}),e.jsx("span",{children:"Manage your content in"})," ",e.jsx("button",{className:a.myCourses,onClick:r,children:"MyCourses."})]})]}):e.jsxs("div",{style:{background:"linear-gradient(to bottom, #FFFFFF, #FCF8F5)"},children:[e.jsx("div",{className:a.headerDiv,children:e.jsx(I,{})}),e.jsx("div",{className:a.outerdiv}),e.jsxs("div",{className:"container",style:{marginTop:"100px"},children:[e.jsx("div",{children:e.jsxs("h4",{style:{color:"#0F75BC"},children:["Fill in the below details to register your content with ONEST"," "]})}),e.jsxs("div",{className:"card mb-2",style:{display:"flex",alignItems:"center",paddingTop:"10px"},children:[e.jsx("h5",{style:{color:"gray"},children:"Tag Content Form"}),e.jsx("form",{className:" card-body form-floating mt-3 mx-1",onSubmit:O(V),autoComplete:"off",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"container mb-3",children:e.jsxs("div",{className:"form-floating",children:[e.jsx("input",{className:"form-control",type:"text",name:"contentName",id:"contentName",placeholder:"Name of the content",...l("contentName")}),e.jsxs("label",{className:"form-label",htmlFor:"contentName",children:[" ","Content Name"]}),s.contentName&&e.jsx("p",{children:s.contentName.message})]})}),e.jsxs("div",{className:"container mb-3",children:[e.jsx("div",{}),e.jsxs("div",{className:"form-floating",children:[e.jsxs("select",{className:"form-select",name:"language",id:"language",...l("language"),children:[e.jsx("option",{value:"",children:"Select a Language"}),e.jsx("option",{value:"English",children:"English"}),e.jsx("option",{value:"Hindi",children:"Hindi"}),e.jsx("option",{value:"Gujarati",children:"Gujarati"}),e.jsx("option",{value:"Assamese",children:"Assamese"}),e.jsx("option",{value:"Tamil",children:"Tamil"}),e.jsx("option",{value:"Marathi",children:"Marathi"}),e.jsx("option",{value:"Kannada",children:"Kannada"})]}),s.language&&e.jsx("p",{children:s.language.message}),e.jsx("label",{className:"form-label",htmlFor:"language",children:"Language"})]})]}),e.jsx("div",{className:"container mb-3",children:e.jsxs("div",{className:"form-floating ",children:[e.jsxs("select",{className:"form-select",name:"theme",id:"theme",...l("theme"),children:[e.jsx("option",{value:"",children:"Select a Theme"}),e.jsx("option",{value:"Animals",children:"Animals"}),e.jsx("option",{value:"Birds",children:"Birds"}),e.jsx("option",{value:"Vegetables",children:"Vegetables"}),e.jsx("option",{value:"Nature",children:"Nature"}),e.jsx("option",{value:"Relations",children:"Relations"}),e.jsx("option",{value:"Food",children:"Food"}),e.jsx("option",{value:"Others",children:"Others"})]}),s.theme&&e.jsx("p",{children:s.theme.message}),e.jsx("label",{className:"form-label",htmlFor:"theme",children:"Theme"})]})}),e.jsx("div",{className:"container mb-3",children:e.jsxs("div",{className:"form-floating",children:[e.jsxs("select",{className:"form-select",name:"contentType",id:"contentType",...l("contentType"),children:[e.jsx("option",{value:"",children:"Type of content"}),e.jsx("option",{value:"Video",children:"Video"}),e.jsx("option",{value:"Read Along",children:"Read Along"}),e.jsx("option",{value:"Read",children:"Read"}),e.jsx("option",{value:"Audio",children:"Audio"}),e.jsx("option",{value:"Sign Language",children:"Sign Language"})]}),s.contentType&&e.jsx("p",{children:s.contentType.message}),e.jsx("label",{className:"form-label",htmlFor:"contentType",children:"Type"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"text",className:"form-control",name:"contentLink",id:"contentLink",placeholder:"Link to the content",...l("contentLink")}),s.contentLink&&e.jsx("p",{children:s.contentLink.message}),e.jsx("label",{className:"form-label",htmlFor:"contentLink",children:"Link to content"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("textarea",{className:"form-control",name:"contentDescription",id:"contentDescription",...l("description"),style:{height:"150px"}}),e.jsx("label",{className:"form-label",htmlFor:"contentDescription",children:"Description"}),s.description&&e.jsx("p",{children:s.description.message})]})}),e.jsx("div",{className:"container mb-3",children:e.jsxs("div",{className:"form-floating",children:[e.jsxs("select",{className:"form-select",name:"contentDomain",id:"contentDomain",...l("contentDomain"),children:[e.jsx("option",{value:"",children:"Choose a Domain"}),d==null?void 0:d.map((n,i)=>e.jsx("option",{value:n==null?void 0:n.name,children:n==null?void 0:n.description},i))]}),s.contentType&&e.jsx("p",{children:s.contentType.message}),e.jsx("label",{className:"form-label",htmlFor:"contentDomain",children:"Domain"})]})}),e.jsx("div",{className:"container mb-3",children:e.jsxs("div",{className:"form-floating",children:[e.jsxs("select",{className:"form-select",name:"contentGoal",id:"contentGoal",...l("contentGoal"),children:[e.jsx("option",{value:"",children:"Select a Curricular Goal"}),m==null?void 0:m.map((n,i)=>e.jsx("option",{value:n==null?void 0:n.name,children:n==null?void 0:n.description},i))]}),s.contentType&&e.jsx("p",{children:s.contentType.message}),e.jsx("label",{className:"form-label",htmlFor:"contentGoal",children:"Curricular Goals"})]})}),e.jsx("div",{className:a.footerheading,children:e.jsx("h3",{children:"Competencies"})}),e.jsxs("div",{className:a.footer,children:[e.jsxs("div",{className:a.formFieldInline,children:[e.jsxs("select",{name:"competencies",id:"competencies",...l("compentencies"),style:{border:"2px solid rgb(185, 185, 185)",height:"40px"},children:[e.jsx("option",{value:""}),h==null?void 0:h.map((n,i)=>e.jsx("option",{value:n==null?void 0:n.name,children:n==null?void 0:n.description},i))]}),s.compentencies&&e.jsx("p",{children:s.compentencies.message})]}),e.jsx("div",{className:a.formFieldInline,children:e.jsx("a",{href:"http://20.219.197.218/explore/",target:"_blank",children:"Click here to know about competencies"})})]}),e.jsxs("div",{className:a.formbutton,children:[e.jsx("div",{className:a.submit,children:e.jsx("button",{className:"btn btn-primary",children:"Submit"})}),e.jsx("div",{children:e.jsx("button",{className:"btn btn-success",children:"Bulk tag"})})]})]})})]})]}),e.jsx("div",{children:e.jsx(P,{})})]})};export{te as default};
