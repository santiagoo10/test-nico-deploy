export function randomPrice() {
  let price = null;

  let min = Math.ceil(0);
  let max = Math.floor(10000000);

  const generator = Math.floor(Math.random() * (max - min) + min);
  price += generator;

  let priceFormat = Intl.NumberFormat("en-US");

  let priceFormated = priceFormat.format(price);

  return priceFormated;
}
