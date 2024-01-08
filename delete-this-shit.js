/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {array} arr - The input array.
 * @return {array} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray([1, 3, 4, 5]));
