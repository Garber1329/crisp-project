import{y as t,r as c,j as e,G as g,a as u}from"./index-BmTd3rNN.js";import C from"./AddAddress-BZPcoQWO.js";import f from"./MyOrders-DbFQrq1m.js";/* empty css                   */const v=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`,w=t.h1`
  margin-bottom: 30px;
  font-size: 32px;
`,S=t.div`
  display: flex;
  gap: 40px;
`,k=t.aside`
  width: 260px;
  border: 1px solid #e5e5e5;
  padding: 20px;
`,y=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,o=t.li`
  padding: 12px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  font-weight: ${({active:n})=>n?"700":"400"};
  color: ${({active:n})=>n?"#000":"#555"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    font-weight: 600;
    color: #000;
  }
`,A=t.main`
  flex: 1;
  border: 1px solid #e5e5e5;
  padding: 30px;
`,h=t.h2`
  font-size: 22px;
  margin-bottom: 29px;
`,L=t.h2`
  font-size: 22px;
  margin-bottom: 11px;
  color: #3F3F3F;
`,d=t.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`,E=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`,x=t.div`
  width: calc(50% - 20px);
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
`;class N extends c.Component{state={name:"",lastname:"",changeEmail:!1,changePassword:!1,email:"",password:""};handleChange=s=>{const{name:i,value:r}=s.target;this.setState({[i]:r})};handleSubmit=s=>{s.preventDefault(),console.log(this.state)};handleCheckbox=s=>{const{name:i,checked:r}=s.target;this.setState({[i]:r})};render(){const{name:s,lastname:i,changeEmail:r,changePassword:a,email:l,password:p}=this.state;return e.jsxs("form",{className:"account-form",onSubmit:this.handleSubmit,children:[e.jsx("h1",{children:"Account Information"}),e.jsx("div",{className:"form-group",children:e.jsxs("label",{children:["First name ",e.jsx("span",{children:"*"}),e.jsx("input",{type:"text",name:"name",value:s,onChange:this.handleChange})]})}),e.jsx("div",{className:"form-group",children:e.jsxs("label",{children:["Last name ",e.jsx("span",{children:"*"}),e.jsx("input",{type:"text",name:"lastname",value:i,onChange:this.handleChange})]})}),e.jsxs("div",{className:"checkbox-group",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"changeEmail",checked:r,onChange:this.handleCheckbox}),"Change Email"]}),this.state.changeEmail&&e.jsx("div",{className:"form-group",children:e.jsxs("label",{children:["New Email",e.jsx("input",{type:"email",name:"email",value:l,onChange:this.handleChange})]})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"changePassword",checked:a,onChange:this.handleCheckbox}),"Change Password"]}),this.state.changePassword&&e.jsx("div",{className:"form-group",children:e.jsxs("label",{children:["New Password",e.jsx("input",{type:"password",name:"password",value:p,onChange:this.handleChange})]})})]}),e.jsx("button",{type:"submit",className:"save-btn",children:"SAVE"})]})}}function D(n){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M14,4 L20,10 L14,4 Z M22.2942268,5.29422684 C22.6840146,5.68401459 22.6812861,6.3187139 22.2864907,6.71350932 L9,20 L2,22 L4,15 L17.2864907,1.71350932 C17.680551,1.319449 18.3127724,1.31277239 18.7057732,1.70577316 L22.2942268,5.29422684 Z M3,19 L5,21 M7,17 L15,9"},child:[]}]})(n)}const M="https://crisp-project-server.onrender.com/wishlists/6",I="https://crisp-project-server.onrender.com/products";function P(){const[n,s]=c.useState([]),[i,r]=c.useState(!0);return c.useEffect(()=>{(async()=>{try{const j=(await u.get(M)).data.productIds.map(m=>u.get(`${I}/${m}`)),b=(await Promise.all(j)).map(m=>m.data);s(b)}catch(l){console.error("Помилка завантаження:",l)}finally{r(!1)}})()}),i?e.jsx("p",{children:"Loading..."}):e.jsxs("div",{className:"wishlist-root",children:[e.jsx("div",{className:"wishlist-container",children:n.map(a=>e.jsxs("div",{className:"wishlist-card",children:[e.jsxs("div",{className:"image-wrapper",children:[e.jsx("img",{src:a.image,alt:a.title}),e.jsx("button",{className:"change-btn",children:e.jsx(D,{size:10})}),e.jsx("button",{className:"delete-btn",children:"✕"})]}),e.jsx("h3",{children:a.title}),e.jsxs("p",{children:[a.price," EUR"]}),e.jsxs("div",{children:[e.jsx("span",{className:"amount",children:"1"}),e.jsx("button",{className:"add-btn",children:"ADD TO CART"})]})]},a._id))}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{children:"SHARE WISH LIST"}),e.jsx("button",{children:"UPDATE WISH LIST"}),e.jsx("button",{children:"ADD ALL TO CART"})]})]})}class O extends c.Component{state={activeSection:"dashboard",mode:"dashboard"};handleMenuClick=s=>{this.setState({activeSection:s,mode:s==="address"?"addressForm":"dashboard"})};renderDashboardContent(){return e.jsx(e.Fragment,{children:e.jsx(A,{children:e.jsxs(E,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Account Information"}),e.jsx(L,{children:"Contact Information"}),e.jsx(d,{children:"Alex Driver"}),e.jsx(d,{children:"ExampeAdress@gmail.com"}),e.jsx("button",{children:"Edit"}),e.jsx("button",{children:"Change password"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Newsletters"}),e.jsx(d,{children:"You don't subscribe to our newsletter."}),e.jsx("button",{children:"Edit"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Address Book"}),e.jsx(d,{children:"You have not set a default address."}),e.jsx("button",{onClick:()=>this.setState({mode:"addressForm"}),children:"Edit Address"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Default Shipping Address"}),e.jsx(d,{children:"You have not set a default shipping address."}),e.jsx("button",{children:"Edit"})]})]})})})}renderContent(){return this.state.mode==="addressForm"?e.jsx(C,{onCancel:()=>this.setState({mode:"dashboard"})}):this.state.activeSection==="orders"?e.jsx(f,{}):this.state.mode==="account"?e.jsx(N,{}):this.state.activeSection==="wishlist"?e.jsx(P,{}):this.renderDashboardContent()}render(){const{activeSection:s}=this.state;return e.jsxs(v,{children:[e.jsx(w,{children:"My Dashboard"}),e.jsxs(S,{children:[e.jsx(k,{children:e.jsxs(y,{children:[e.jsx(o,{active:s==="dashboard",onClick:()=>this.handleMenuClick("dashboard"),children:"Account Dashboard"}),e.jsx(o,{active:s==="account",onClick:()=>this.handleMenuClick("account"),children:"Account Information"}),e.jsx(o,{active:s==="address",onClick:()=>this.handleMenuClick("address"),children:"Address Book"}),e.jsx(o,{active:s==="orders",onClick:()=>this.handleMenuClick("orders"),children:"My Orders"}),e.jsx(o,{active:s==="wishlist",onClick:()=>this.handleMenuClick("wishlist"),children:"My Wishlist"}),e.jsx(o,{active:s==="newsletter",onClick:()=>this.handleMenuClick("newsletter"),children:"Newsletter Subscriptions"})]})}),this.renderContent()]})]})}}export{O as default};
