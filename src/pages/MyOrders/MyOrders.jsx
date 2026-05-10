import { Component } from "react";
import axios from "axios";
import {
  OrdersWrapper,
  OrdersTitle,
  OrdersGrid,
  OrderCard,
  OrderRow,
  OrderLabel,
  OrderValue,
  Status
} from "./MyOrders.styles";


const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28];

async function getProductsByIds() {
  try {
    const promises = productIds.map(id =>
      axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
    );

    const responses = await Promise.all(promises);

    const selectedProducts = responses.map(response => response.data);

    console.log(selectedProducts);
    return selectedProducts;
  } catch (error) {
    console.error("Помилка завантаження товарів:", error);
  }
}


class MyOrders extends Component {

  state = {
    myOrders: [],
    productIds: []
  };

  async componentDidMount() {
    const products = await getProductsByIds();

    this.setState({
      myOrders: products,
      productIds: productIds
    });
  }

  render() {
    const { myOrders } = this.state;

    return (
      <OrdersWrapper>
        <OrdersTitle>My Orders</OrdersTitle>

        <OrdersGrid>
          {myOrders.map(product => (
            <OrderCard key={product._id}>
              <OrderRow>
                <OrderLabel>Product</OrderLabel>
                <OrderValue>{product.title}</OrderValue>
              </OrderRow>

              <OrderRow>
                <OrderLabel>Price</OrderLabel>
                <OrderValue>${product.price}</OrderValue>
              </OrderRow>

              <OrderRow>
                <OrderLabel>Status</OrderLabel>
                <Status>Delivered</Status>
              </OrderRow>
            </OrderCard>
          ))}
        </OrdersGrid>
      </OrdersWrapper>
    );
  }
}

export default MyOrders;