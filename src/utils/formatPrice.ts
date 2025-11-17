export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatDiscount = (original: number, discounted: number): string => {
  const discount = Math.round(((original - discounted) / original) * 100);
  return `${discount}%`;
};
