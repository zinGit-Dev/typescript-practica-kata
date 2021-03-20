let n = 44848774;
const order = n.toString().split('');
console.log('>order:', order);
const sortedArray = order.sort((n1, n2) => n2 - n1);
console.log('>sorte:', sortedArray);
const result = Number(sortedArray.join(''));
console.log('>result:', result);
