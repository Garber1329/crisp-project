import { useState } from 'react';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import { MdZoomOutMap } from 'react-icons/md';
import { MdOutlineZoomInMap } from 'react-icons/md';

const ShopItems = ({ shopItems }) => {
  const [zoomItemId, setZoomId] = useState(null);
  const zoomingHandle = (id) => {
    setZoomId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className={clsx(styles.shopItems)}>
      {shopItems.map((shopItem) => (
        <div className={clsx(styles.shopItem)} key={shopItem._id}>
          <div className={clsx(styles.shopItemImgContent)}>
            <img
              src={shopItem.image}
              alt={shopItem.title}
              className={clsx(styles.shopitemImg, zoomItemId === shopItem._id && styles.zoomed)}
            />
            <button
              className={clsx(styles.shopItemButton)}
              onClick={() => zoomingHandle(shopItem._id)}
            >
              {zoomItemId === shopItem._id ? (
                <>
                  <MdOutlineZoomInMap /> Unzoom
                </>
              ) : (
                <>
                  <MdZoomOutMap /> Zoom
                </>
              )}
            </button>
          </div>
          <h5 className={clsx(styles.shopItemType)}>{shopItem.category}</h5>
          <h2 className={clsx(styles.shopItemTitle)}>{shopItem.title}</h2>
          {shopItem.discountedPrice ? (
            <div className={clsx(styles.shopItemPrices)}>
              <p className={clsx(styles.shopItemDiscount)}>{shopItem.discountedPrice} EUR</p>
              <p className={clsx(styles.shopItemPriceDiscount)}>{shopItem.price} EUR</p>
            </div>
          ) : (
            <p className={clsx(styles.shopItemPrice)}>{shopItem.price}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
