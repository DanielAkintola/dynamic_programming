const gridTraveller = (m, n, data = {}) => {
  const key = `${m},${n}`;
  if (n == 1 && m == 1) return 1;
  if (n == 0 || m == 0) return 0;

  if (data[key]) {
    return data[key];
  }

  data[key] = gridTraveller(m - 1, n, data) + gridTraveller(m, n - 1, data);
  return data[key];
};

console.log(gridTraveller(3, 3));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(5, 3));
console.log(gridTraveller(3, 5));
console.log(gridTraveller(18, 18));
