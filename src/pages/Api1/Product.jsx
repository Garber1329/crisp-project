import { getProductsByIds } from "./Api";

const productIds = [1, 2, 5];

getProductsByIds(productIds).then((products) => {
  console.log(products);
});