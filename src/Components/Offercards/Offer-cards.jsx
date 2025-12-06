import image_3 from '../../images/HomePage/image_3.svg';
import image_4 from '../../images/HomePage/image_4.svg';
import image_5 from '../../images/HomePage/image_5.svg';

const OfferCard = () => {
  return (
    <>
      <div className="block1">
        <div className="dive1">
          <div className="div">
            <img src={image_3} />

            <div>
              <h1 className="h1">
                choose <br /> your look
              </h1>
              <p className="p">See our clothing collections</p>
              <button className="">shop now</button>
            </div>
          </div>
        </div>

        <div className="dive2">
          <div className="div">
            <div>
              <h1 className="h1">brand new style</h1>
              <p className="p">Popular clothing brands</p>
              <button className="">shop now</button>
            </div>

            <img src={image_4} />
          </div>
        </div>

        <div className="dive3">
          <div className="div">
            <div>
              <h1 className="h1">
                Up to <br /> 40% off
              </h1>
              <p className="p">Special offers and great deals</p>
              <button className="">shop now</button>
            </div>

            <img src={image_5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;