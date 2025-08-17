function contains(element, list) {
  let i = 0;
  while (i < list.length) {
    if (list[i] === element) {
      return true;
    }
    i++;
  }
  return false;
}
