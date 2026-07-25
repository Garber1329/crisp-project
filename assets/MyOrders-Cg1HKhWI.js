import{r as c,a as x,j as e}from"./index-DHLzyRNu.js";import{y as s}from"./styled-components.browser.esm-DNyrEG5U.js";const l=s.div`
  padding: 20px;
`,p=s.h2`
  margin-bottom: 30px;
`;s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;const h=s.div`
  width: calc(33.333% - 14px);
  border: 1px solid #eee;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
`,t=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,n=s.span`
  font-weight: 600;
`,a=s.span`
  text-align: right;
`,j=s.span`
  color: green;
  font-weight: 600;
`;class f extends c.Component{state={myOrders:[],userId:3};async componentDidMount(){try{const i=(await x.get("https://fakestoreapiserver.reactbd.org/api/orders")).data.data.filter(o=>o.userId===this.state.userId);this.setState({myOrders:i})}catch(d){console.error("Помилка завантаження замовлень:",d)}}render(){const{myOrders:d}=this.state;return e.jsxs(l,{children:[e.jsx(p,{children:"My Orders"}),d.map(r=>e.jsxs(h,{children:[e.jsxs(t,{children:[e.jsx(n,{children:"Order ID:"}),e.jsx(a,{children:r._id})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Product:"}),e.jsx(a,{children:r.items[0].name})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Price:"}),e.jsxs(a,{children:["$",r.totalAmount]})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Status:"}),e.jsx(j,{children:r.status})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Date:"}),e.jsx(a,{children:new Date(r.orderDate).toLocaleDateString()})]})]},r._id))]})}}export{f as default};
