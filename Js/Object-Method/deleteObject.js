let vehicle = {
  key1: "car",
  key2: "bike",
  key3: "jet",
};

delete vehicle.key1; // first mehtod
console.log("vehicle-", vehicle);

let fruits = {
  key1: "apple",
  key2: "orange",
  key3: "watermelon",
  key3: "pineapple",
};
// we destructure obj, omitting key1, key2 and collecting the rest/remaining of the properties into newObj.
const { key1, key2, ...newObject } = fruits; // second method
// ... (spread operator) is used to collect all the remaining properties into the newObj variable.
// key1 and key2 are excluded/omitted from newObj.
// excluded and omitted and avoided  ---ഒഴിവാക്കുകയും
console.log("fruits -", fruits,);
console.log("newObj-", newObject);