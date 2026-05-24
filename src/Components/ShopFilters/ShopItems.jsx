import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import styles from './shopFilters.module.css';
import { MdZoomOutMap, MdOutlineZoomInMap } from 'react-icons/md';

const ShopItems = ({ shopItems }) => {
  const [zoomItemId, setZoomId] = useState(null);

  const zoomingHandle = useCallback((id) => {
    setZoomId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div className={clsx(styles.shopItems)}>
      <AnimatePresence mode="popLayout">
        {shopItems.map((shopItem) => (
          <motion.div
            key={shopItem._id}
            className={clsx(styles.shopItem)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            layout
          >
            <div className={clsx(styles.shopItemImgContent)}>
              <img
                src={shopItem.image}
                alt={shopItem.title}
                className={clsx(styles.shopItemImg, zoomItemId === shopItem._id && styles.zoomed)}
              />
              <button
                className={clsx(styles.shopItemButton)}
                onClick={() => zoomingHandle(shopItem._id)}
              >
                {zoomItemId === shopItem._id ? (
                  <>
                    <MdOutlineZoomInMap /> Zoom out
                  </>
                ) : (
                  <>
                    <MdZoomOutMap /> Zoom in
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
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ShopItems;
