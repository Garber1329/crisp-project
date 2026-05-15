import banner3 from './banner3.module.css'

export default function Banner3() {
  return (
    <div className={banner3.bannerMain}>
      <div className={banner3.bannerLine}>
        <h1 className={banner3.title}>SHOPING WITHOUT LIMITS.</h1>
        <p className={banner3.text}>
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco. We will deliver your purchase anywhere!
        </p>
        <button className={banner3.button}>SHOP NOW</button>
      </div>
    </div>
  );
}
