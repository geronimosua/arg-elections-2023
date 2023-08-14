export const formatPopulation = (n: number) => {
  const quantity = n.toString();
  const length = quantity.length;

  if (length === 8) {
    return `${quantity[0]}${quantity[1]}M`;
  } else if (length === 7) {
    return `${quantity[0]}.${quantity[1]}M`;
  } else if (length === 6) {
    return `${quantity[0]}${quantity[1]}${quantity[2]}K`;
  } else if (length === 5) {
    return `${quantity[0]}${quantity[1]}K`;
  } else if (length === 4) {
    return `${quantity[0]}.${quantity[1]}K`;
  } else {
    return quantity;
  }
};
