import { Component } from "react";
import axios from "axios";
import {
  OrdersWrapper,
  OrdersTitle,
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
      axios.get(`https://crisp-project-server.onrender.com/products/${id}`)
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
    userId: 3,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://fakestoreapiserver.reactbd.org/api/orders"
      );

      const orders = response.data.data;

      const userOrders = orders.filter(
        order => order.userId === this.state.userId
      );

      this.setState({
        myOrders: userOrders,
      });

    } catch (error) {
      console.error("Помилка завантаження замовлень:", error);
    }
  }

  render() {
    const { myOrders } = this.state;

    return (
      <OrdersWrapper>
        <OrdersTitle>My Orders</OrdersTitle>

        {myOrders.map(order => (
          <OrderCard key={order._id}>
            <OrderRow>
              <OrderLabel>Order ID:</OrderLabel>
              <OrderValue>{order._id}</OrderValue>
            </OrderRow>

            <OrderRow>
              <OrderLabel>Product:</OrderLabel>
              <OrderValue>{order.items[0].name}</OrderValue>
            </OrderRow>

            <OrderRow>
              <OrderLabel>Price:</OrderLabel>
              <OrderValue>${order.totalAmount}</OrderValue>
            </OrderRow>

            <OrderRow>
              <OrderLabel>Status:</OrderLabel>
              <Status>{order.status}</Status>
            </OrderRow>

            <OrderRow>
              <OrderLabel>Date:</OrderLabel>
              <OrderValue>
                {new Date(order.orderDate).toLocaleDateString()}
              </OrderValue>
            </OrderRow>
          </OrderCard>
        ))}
      </OrdersWrapper>
    );
  }
}

export default MyOrders;