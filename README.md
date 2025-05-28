📦 sort-test
A simple TypeScript utility that merges three arrays of numbers and returns a single sorted array in ascending order.

🛠 Features
✅ Merges any three arrays of numbers

✅ Handles duplicates and negative numbers

✅ Includes a full test suite with jest

✅ Written in TypeScript for type safety

🚀 Getting Started
Follow these steps to set up and run the project:
1. Install Dependencies
```
npm install
```
2. Run Tests
Make sure everything works as expected:
```
npm run test
```
3. Execute the Script
Run the merge logic and see the output in the terminal:
```
npm start
```
🧪 Example
Here's what happens when the function runs:
```
mergeArr([13, 11, 9, 8, 7, 5], [1, 3, 6], [2, 4, 8, 10]);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 13]
```
```
sort-test/
├── src/
│   └── merge-arr.ts     # Core merge function
├── __tests__/
│   └── merge-arr.test.ts # Test suite
├── package.json
└── README.md
```
