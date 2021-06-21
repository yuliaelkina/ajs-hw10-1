export default function destructuringSpecials(obj) {
  const result = [];
  obj.special.forEach((element) => {
    const {
      id, name, description = 'не доступно', icon,
    } = element;
    const resObj = {
      id, name, description, icon,
    };
    result.push(resObj);
  });
  return result;
}
