import axios from "axios";

export const getProductsByIds = async (productIds) => {
  try {
    const promises = productIds.map((id) =>
      axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
    );
    const responses = await Promise.all(promises);

    const selectedProducts = responses.map(
      (response) => response.data
    );

    return selectedProducts;
  } catch (error) {
    console.error("Помилка завантаження товарів:", error);
    throw error;
  }
};