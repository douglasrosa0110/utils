module.exports = (value) => {
  let subTotal = 0;
  let total = 0;
  let mult = 2;

  for (let i = value.length - 1; i >= 0; i--) {
    subTotal = mult * parseInt(value[i]);
    while (subTotal > 9) subTotal = parseInt(`${subTotal}`[0]) + parseInt(`${subTotal}`[1]);
    total = total + subTotal;
    if(mult === 2) mult = 1
    else mult = 2;
  }

  subTotal = total;
  if(subTotal % 10 === 0) subTotal += 10
  else while(subTotal % 10) subTotal += 1

  total = subTotal - total;
  if(total === 10) total = 0;

  return String(total);
}