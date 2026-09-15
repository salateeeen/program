const arr = [1, 2, 3, 4, 5, 6, 7];
//? dose not creat new array just pointer to seem array
 const pointer = arr;
 arr.splice(1, 1);
 console.log(arr);
 console.log(pointer);