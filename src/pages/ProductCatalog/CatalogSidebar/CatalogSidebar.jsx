import css from "./catalogSidebar.module.css";
import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import plusIcon from "../../../images/ProductCatalog/+.svg";
import minusIcon from "../../../images/ProductCatalog/-.svg";

export default function CatalogSidebar({ products = [], onFilterChange }) {
  const [expandedPanel, setExpandedPanel] = useState(false);
  const [price, setPrice] = useState([20, 800]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handleChangePriceCommitted = (event, newValue) => {
    if (onFilterChange) {
      onFilterChange({ brands: selectedBrands, types: selectedTypes, sizes: selectedSizes, price: newValue });
    }
  };

  const handleCheckboxChange = (filterType, value) => {
    let newBrands = selectedBrands;
    let newTypes = selectedTypes;
    let newSizes = selectedSizes;

    if (filterType === 'brand') {
      newBrands = selectedBrands.includes(value) ? selectedBrands.filter((item) => item !== value) : [...selectedBrands, value];
      setSelectedBrands(newBrands);
    } else if (filterType === 'type') {
      newTypes = selectedTypes.includes(value) ? selectedTypes.filter((item) => item !== value) : [...selectedTypes, value];
      setSelectedTypes(newTypes);
    } else if (filterType === 'size') {
      newSizes = selectedSizes.includes(value) ? selectedSizes.filter((item) => item !== value) : [...selectedSizes, value];
      setSelectedSizes(newSizes);
    }

    if (onFilterChange) {
      onFilterChange({ brands: newBrands, types: newTypes, sizes: newSizes, price });
    }
  };

  const getBrands = () => {
    const brands = products.map((item) => item.brand);
    return [...new Set(brands)];
  };

  const getTypes = () => {
    const types = products.map((item) => item.category);
    return [...new Set(types)];
  };

  const getSizes = () => {
    if (!products || products.length === 0) return [];

    const uniqueSizes = [...new Set(products.flatMap((item) => item.size))];

    const sizeOrder = {
      XS: 1,
      S: 2,
      M: 3,
      L: 4,
      XL: 5,
      XXL: 6,
      "One Size": 99,
    };

    uniqueSizes.sort((a, b) => {
      const orderA = sizeOrder[a];
      const orderB = sizeOrder[b];

      if (orderA && orderB) {
        return orderA - orderB;
      }
      if (orderA) return -1;
      if (orderB) return 1;

      return a.localeCompare(b, undefined, { numeric: true });
    });

    return uniqueSizes;
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const brands = getBrands();
  const types = getTypes();
  const sizes = getSizes();

  return (
    <div className={css.catalogSidebar}>
      <Accordion
        expanded={expandedPanel === "panel1"}
        onChange={handleChange("panel1")}
        className={css.accordion}
      >
        <AccordionSummary
          expandIcon={
            <span className={css.categoryIcon}>
              {expandedPanel === "panel1" ? (
                <img src={minusIcon} alt="Collapse" />
              ) : (
                <img src={plusIcon} alt="Expand" />
              )}
            </span>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3 className={css.categoryTitle}>Brand</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className={css.categoryType}>
            {brands.map((brand) => {
              return (
                <label className={css.brandsBrandWrapper} key={brand}>
                  <input 
                    type="checkbox" 
                    className={css.checkbox} 
                    id={brand} 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleCheckboxChange('brand', brand)}
                  />
                  <span className={css.checkmark}></span>
                  <label htmlFor={brand} className={css.brandsBrandLabel}>
                    {brand}
                  </label>
                </label>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        className={css.accordion}
      >
        <AccordionSummary
          expandIcon={
            <span className={css.categoryIcon}>
              {expandedPanel === "panel2" ? (
                <img src={minusIcon} alt="Collapse" />
              ) : (
                <img src={plusIcon} alt="Expand" />
              )}
            </span>
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className={css.categoryTitle}>Type</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className={css.categoryType}>
            {types.map((type) => {
              return (
                <label className={css.typesTypeWrapper} key={type}>
                  <input 
                    type="checkbox" 
                    className={css.checkbox} 
                    id={type} 
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleCheckboxChange('type', type)}
                  />
                  <span className={css.checkmark}></span>
                  <label htmlFor={type} className={css.typesTypeLabel}>
                    {type}
                  </label>
                </label>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel3"}
        onChange={handleChange("panel3")}
        className={css.accordion}
      >
        <AccordionSummary
          expandIcon={
            <span className={css.categoryIcon}>
              {expandedPanel === "panel3" ? (
                <img src={minusIcon} alt="Collapse" />
              ) : (
                <img src={plusIcon} alt="Expand" />
              )}
            </span>
          }
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3 className={css.categoryTitle}>Size</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className={css.categorySize}>
            {sizes.map((size) => {
              return (
                <label className={css.sizesSizeWrapper} key={size}>
                  <input 
                    type="checkbox" 
                    className={css.sizesSize} 
                    id={size} 
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleCheckboxChange('size', size)}
                  />
                  <label htmlFor={size} className={css.sizesSizeLabel}>
                    {size}
                  </label>
                </label>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel4"}
        onChange={handleChange("panel4")}
        className={css.accordion}
      >
        <AccordionSummary
          expandIcon={
            <span className={css.categoryIcon}>
              {expandedPanel === "panel4" ? (
                <img src={minusIcon} alt="Collapse" />
              ) : (
                <img src={plusIcon} alt="Expand" />
              )}
            </span>
          }
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <h3 className={css.categoryTitle}>Price range</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography className={css.priceLabels}>
              <span className={css.priceValue}>{price[0]} EUR</span>
              <span className={css.priceValue}>{price[1]} EUR</span>
            </Typography>
            <Slider
              value={price}
              onChange={handleChangePrice}
              onChangeCommitted={handleChangePriceCommitted}
              min={20}
              max={800}
              disableSwap
              className={css.priceSlider}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
