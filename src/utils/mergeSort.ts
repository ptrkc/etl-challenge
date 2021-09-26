export function mergeSort(
  list: number[],
  start = 0,
  end = list.length
): number[] {
  const itens = end - start;
  if (itens > 1) {
    const middle = Math.floor((end + start) / 2);
    const leftList = mergeSort(list, start, middle);
    const rightList = mergeSort(list, middle, end);
    return merge(leftList, rightList);
  }
  if (itens === 1) return [list[start]];
  return [];
}

function merge(leftList: number[], rightList: number[]): number[] {
  let i = 0;
  let [l, r] = [0, 0];
  const mergedList = [];
  while (i < leftList.length + rightList.length) {
    if (l >= leftList.length) {
      mergedList.push(rightList[r]);
      r++;
    } else if (r >= rightList.length) {
      mergedList.push(leftList[l]);
      l++;
    } else if (leftList[l] < rightList[r]) {
      mergedList.push(leftList[l]);
      l++;
    } else {
      mergedList.push(rightList[r]);
      r++;
    }
    i++;
  }
  return mergedList;
}
