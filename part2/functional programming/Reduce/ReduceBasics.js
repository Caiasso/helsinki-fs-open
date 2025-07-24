var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

/* The Reduce Way */
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
console.log(totalAmount);
/* The Reduce Way */

/* The Classic Way */
totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
console.log(totalAmount);
/* The Classic Way */
