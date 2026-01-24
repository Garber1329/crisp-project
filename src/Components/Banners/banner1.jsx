import {
  Banner,
  BannerContent,
  BannerButton,
  BannerImage,
} from "./banner.styles";
import banner1 from "../../images/Banners/banner1.jpg";

export default function Banner1() {
  return (
    <Banner className="banner-top">
      <BannerContent>
        <h1>SHOPING WITHOUT LIMITS.</h1>
        <p>
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco. We will deliver your purchase anywhere!
        </p>
        <BannerButton>SHOP NOW</BannerButton>
      </BannerContent>

      <BannerImage>
        <img src={banner1} alt="Banner" />
      </BannerImage>
    </Banner>
  );
}
