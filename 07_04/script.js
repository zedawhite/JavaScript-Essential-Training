/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const showExpectedResult = false;
const showHints = false;

const deskArray = [
  "pen",
  "camera",
"phone",
"notebook",
  "headphone",
  "light bulb",
  "USB drive",
  "elephant"
  ];

const processArray = deskArray => {
  let newDeskArr = [...desArray];

  newDeskArr.pop()
  newDeskArr.sort()
  newDeskArr.unshift(newDeskArr.pop())
  const usbIndex = newDeskArr.indexOf("USB drive")
  newDeskArr.push(newDeskArr.plice(usbIndex,1))

  const laptopIndex = newDeskArr.indexOf("laptop")
  newDeskArr.plice(lapto0pIndex. 1)

  return newDeskArr;
};
