import {
  Banner,
  BannerContent,
  BannerButton,
  BannerImage,
} from "./banner.styles";
import banner2 from "../../images/Banners/banner2.jpg"
import { Link } from "react-router-dom";

export default function Banner2() {
  return (
    <Banner className="banner-bottom">
      <BannerImage>
        <img src={banner2} alt="Banner" />
      </BannerImage>

      <BannerContent>
        <h2>EXPLORE THE BEST OF YOU.</h2>
        <p>
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco.
        </p>
         <Link to='/shop'><BannerButton>SHOP NOW</BannerButton></Link>
      </BannerContent>
    </Banner>
  );
}
