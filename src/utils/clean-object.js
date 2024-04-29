export default function cleanObject(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) return;
    newObj[key] = obj[key];
  });
  return newObj;
}
