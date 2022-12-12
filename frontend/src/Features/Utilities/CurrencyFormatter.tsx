const CurrencyFormat = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export const CurrencyFormatter = (number: number) => {
  return CurrencyFormat.format(number);
};
