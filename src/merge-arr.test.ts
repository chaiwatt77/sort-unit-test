import { mergeArr } from "./merge-arr";

describe("mergeArr function", () => {
  it("should merge three sorted arrays into one ascending array", () => {
    const a = [13, 11, 9, 8, 7, 5];
    const b = [1, 3, 6];
    const c = [2, 4, 8, 10];

    const result = mergeArr(a, b, c);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 13]);
  });

  it("should handle empty arrays", () => {
    expect(mergeArr([], [], [])).toEqual([]);

    expect(mergeArr([], [1], [])).toEqual([1]);
    expect(mergeArr([], [], [2])).toEqual([2]);
    expect(mergeArr([5], [], [])).toEqual([5]);

    expect(mergeArr([], [1], [2])).toEqual([1, 2]);
    expect(mergeArr([3, 2], [], [1])).toEqual([1, 2, 3]);
    expect(mergeArr([5, 3, 1], [2, 4], [])).toEqual([1, 2, 3, 4, 5]);

    expect(mergeArr([3, 0, -2], [], [])).toEqual([-2, 0, 3]);

    expect(mergeArr([], [7], [5])).toEqual([5, 7]);

    expect(mergeArr([], [3, 3], [1, 3])).toEqual([1, 3, 3, 3]);
  });

  it("should handle arrays with duplicate values", () => {
    expect(mergeArr([5, 3, 3], [1, 3], [2, 3])).toEqual([1, 2, 3, 3, 3, 3, 5]);
  });

  it("should sort with negative numbers", () => {
    expect(mergeArr([-5, -10], [-3, -1], [0])).toEqual([-10, -5, -3, -1, 0]);
  });

  it("should handle all arrays with the same values", () => {
    expect(mergeArr([3, 3], [3, 3], [3, 3])).toEqual([3, 3, 3, 3, 3, 3]);
  });
});
