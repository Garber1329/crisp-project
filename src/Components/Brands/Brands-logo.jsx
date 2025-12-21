import {
  BrandsWrapper,
  BrandsTitle,
  BrandsLine,
  BrandsList,
} from "./Brands-logo.styles";

import image1 from "../../images/HomePage/g2414.png";
import image2 from "../../images/HomePage/Group.png";
import image3 from "../../images/HomePage/layer1.png";
import image4 from "../../images/HomePage/Group (1).png";
import image5 from "../../images/HomePage/Vector.png";
import image6 from "../../images/HomePage/Group (2).png";
import image7 from "../../images/HomePage/Vector (1).png";

const Brandslogo = () => {
  return (
    <BrandsWrapper>
      <BrandsTitle>CHOOSE YOUR BRAND</BrandsTitle>

      <BrandsLine />

      <BrandsList>
        <img src={image1} alt="chanel" />
        <img src={image2} alt="burberry" />
        <img src={image3} alt="dior" />
        <img src={image4} alt="fendi" />
        <img src={image5} alt="versace" />
        <img src={image6} alt="gucci" />
        <img src={image7} alt="armani" />
      </BrandsList>

      <BrandsLine />
    </BrandsWrapper>
  );
};

export default Brandslogo;
