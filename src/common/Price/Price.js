import React from 'react';
import PropTypes from 'prop-types';
import PriceAmount from './components/PriceAmount';
import SalePrice from './components/SalePrice';
import Amount from './components/Amount';
import CurrentSymbol from './components/CurrentSymbol';
import SaleTag from './components/SaleTag';

const Price = ({ price, symbol, salePrice, locale }) => {
  const currentPrice = salePrice ? Number(salePrice) : Number(price);
  let downPrice = 0;
  let _salePrice = 0;
  let _price = 0;

  if (salePrice) {
    _salePrice = Number(salePrice);
    _price = Number(price);
    // caculate percent
    downPrice = Math.round(((_price - _salePrice) / _price) * 100);
    // downPrice = Math.round((_salePrice / _price) * 100);
  }

  return (
    <PriceAmount>
      {salePrice ? (
        <SalePrice>
          <Price price={_price} />
        </SalePrice>
      ) : null
      }
      <Amount>
        {currentPrice.toLocaleString(currentPrice, locale)}
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
  locale: PropTypes.string,
  symbol: PropTypes.string
};
Price.defaultProps = {
  locale: 'vi-VN',
  symbol: 'đ',
  salePrice: 0
};

export default Price;
