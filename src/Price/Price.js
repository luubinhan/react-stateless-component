import React from 'react';
import PropTypes from 'prop-types';
import PriceAmount from './components/PriceAmount';
import SalePrice from './components/SalePrice';
import Amount from './components/Amount';
import CurrentSymbol from './components/CurrentSymbol';
import SaleTag from './components/SaleTag';

const Price = ({ price, symbol, salePrice }) => {
  const currentPrice = salePrice ? Number(salePrice) : Number(price);
  let downPrice = 0;
  if (salePrice) {
    salePrice = Number(salePrice);
    price = Number(price);
    // caculate percent
    downPrice = Math.round((salePrice / price) * 100);
  }

  return (
    <PriceAmount>
      {salePrice ? (
          <SalePrice>
            <Price price={price} />
          </SalePrice>
        ) : null
      }
      <Amount>
        {currentPrice.toLocaleString(currentPrice, 'vi-VN')}
      </Amount>
      <CurrentSymbol>{symbol}</CurrentSymbol>
      { salePrice
        ? <SaleTag>-{downPrice}%</SaleTag>
        : null
      }
    </PriceAmount>
  );
};

Price.propTypes = {
  price: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  salePrice: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  symbol: PropTypes.string
};
Price.defaultProps = {
  symbol: 'đ',
  salePrice: 0
};

export default Price;
