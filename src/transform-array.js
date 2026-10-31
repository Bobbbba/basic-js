const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const isCommand = (x) =>
    x === "--discard-next" ||
    x === "--discard-prev" ||
    x === "--double-next" ||
    x === "--double-prev";
  const result = [];
  
  let prevDiscarded = false;

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];

    if ((item === "--discard-prev" || item === "--double-prev") && prevDiscarded) {
      prevDiscarded = false; // сбрасываем флаг
      continue;
    }

    switch (item) {
      case "--discard-next":
        i += 1;
        prevDiscarded = true;
        break;

      case "--discard-prev":
        if (result.length > 0) {
          result.pop();
        }
        break;
      
      case "--double-next":
        if (i + 1 < arr.length) {
          if (!isCommand(arr[i + 1])) {
            result.push(arr[i + 1]);
          } else {
            i += 1;
          }
        }
        break;

      case "--double-prev":
        if (i - 1 >= 0 && result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;

      

      default:
        result.push(item);
        prevDiscarded = false
    }
  }
  return result;
}

module.exports = {
  transform,
};
