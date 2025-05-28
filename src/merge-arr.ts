export function mergeArr(
  arr1: number[],
  arr2: number[],
  arr3: number[]
): number[] {
  let data = [...arr1, ...arr2, ...arr3];
  let min, pos;

  for (let i = 0; i < data.length - 1; i++) {
    min = data[i];
    pos = i;
    for (let j = i + 1; j < data.length; j++) {
      if (min > data[j]) {
        min = data[j];
        pos = j;
      }
    }
    data[pos] = data[i];
    data[i] = min;
  }

  return data;
}

const result = mergeArr([13, 11, 9, 8, 7, 5], [1, 3, 6], [2, 4, 8, 10]);
console.log(result);
