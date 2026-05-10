import './Offer-cards.css';

import image_3 from '../../images/HomePage/image_3.svg';
import image_4 from '../../images/HomePage/image_4.svg';
import image_5 from '../../images/HomePage/image_5.svg';


const OfferCard = () => {
  return (
    <>
      <div className="offerSection">
        <div className='offerCard offerCard--first--second'>
          <div className="offerCard offerCard--first">
          <div className="offerCard__inner">
            <img className="offerCard__image" src={image_3} />

            <div className="offerCard__content">
              <h1 className="offerCard__title">
                choose <br /> your look
              </h1>
              <p className="offerCard__text">See our clothing collections</p>
              <button className="offerCard__button">shop now</button>
            </div>
          </div>
        </div>

        <div className="offerCard offerCard--second">
          <div className="offerCard__inner">
            <div className="offerCard__content">
              <h1 className="offerCard__title">brand new style</h1>
              <p className="offerCard__text">Popular clothing brands</p>
              <button className="offerCard__button">shop now</button>
            </div>

            <img className="offerCard__image" src={image_4} />
          </div>
        </div>
        </div>
        

        <div className="offerCard offerCard--third">
          <div className="offerCard__inner">
            <div className="offerCard__content">
              <h1 className="offerCard__title">
                Up to <br /> 40% off
              </h1>
              <p className="offerCard__text">Special offers and great deals</p>
              <button className="offerCard__button">shop now</button>
            </div>

            <img className="offerCard__image" src={image_5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;