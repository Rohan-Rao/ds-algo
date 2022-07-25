/**
 * Solved on - GeeksForGeeks
 *
 * Problem - Write code to remove duplicates from unsorted linked list
 */

function removeDuplicatesWithTwoLoops(head) {
  let itr = head;
  while (itr !== null && itr.next !== null) {
    let duplicateCheck = itr;
    while (duplicateCheck !== null && duplicateCheck.next !== null) {
      if (duplicateCheck.next.data === itr.data) {
        duplicateCheck.next = duplicateCheck.next.next;
      } else {
        duplicateCheck = duplicateCheck.next;
      }
    }
    itr = itr.next;
  }
  return head;
}

function removeDuplicatesInOnePass(head) {
  let itr = head;
  const map = new Map();
  while (itr !== null && itr.next !== null) {
    if (itr.data === itr.next.data || map.has(itr.next.data)) {
      itr.next = itr.next.next;
    } else {
      map.set(itr.data, 1);
      itr = itr.next;
    }
  }
  return head;
}
