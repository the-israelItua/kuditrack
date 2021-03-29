import numeral from 'numeral';

export const formatCurrency = (amount) => {
    if (isNaN(amount))
      amount = 0;
  
    const hasDecimal = amount % 1 !== 0;
    if (hasDecimal)
      return `N ${numeral(amount).format('0,0.00', Math.floor)}`;
  
    return `N ${numeral(amount).format('0,0', Math.floor)}`;
  };