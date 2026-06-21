import{y as n,r as x,j as s}from"./index-BmTd3rNN.js";const d=n.div`
  max-width: 800px;
`,o=n.h2`
  font-size: 24px;
  margin-bottom: 30px;
`,i=n.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`,e=n.div`
  grid-column: span 2;
`,t=n.label`
  font-size: 14px;
  margin-bottom: 6px;
`,r=n.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #000;
  }
`,c=n.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`,p=n.button`
  padding: 10px 20px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #333;
  }

  &:nth-child(2) {
    background: #fff;
    color: #000;
  }
`;class j extends x.Component{render(){return s.jsxs(d,{children:[s.jsx(o,{children:"Contact Information"}),s.jsxs(i,{children:[s.jsxs(e,{children:[s.jsx(t,{children:"First Name"}),s.jsx(r,{type:"text"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"Last Name"}),s.jsx(r,{type:"text"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"Company"}),s.jsx(r,{type:"email"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"Phone Number"}),s.jsx(r,{type:"text"})]}),s.jsx(o,{children:"Adress"}),s.jsxs(e,{children:[s.jsx(t,{children:"Street Address"}),s.jsx(r,{type:"text"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"Country"}),s.jsx(r,{type:"text"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"State/Province"}),s.jsx(r,{type:"text"})]}),s.jsxs(e,{children:[s.jsx(t,{children:"Zip/Postal Code"}),s.jsx(r,{type:"text"})]}),s.jsx(c,{children:s.jsx(p,{type:"submit",children:"Save Address"})})]})]})}}export{j as default};
