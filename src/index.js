module.exports = function towelSort (matrix) {
  
  let res = [];
  if (matrix === undefined) return res;
  for (let i = 0; i < matrix.length; i++) {
    i === 0 || i%2 === 0 ? matrix[i].map(i => res.push(i)) : matrix[i].reverse().map(i => res.push(i))
    
  }

  return res;
}
