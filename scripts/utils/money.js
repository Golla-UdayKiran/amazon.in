export function formatCurrency(pricePaise) {
  return (pricePaise / 100).toFixed(2);
}