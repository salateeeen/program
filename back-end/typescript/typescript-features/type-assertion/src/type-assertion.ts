/// type casting to use auto complete

let img = <HTMLImageElement>document.getElementById("my-img");
let input = document.getElementById("my-input") as HTMLInputElement;
img.src = "sitb";

/// no checking after we add as

//!ERROR not detected
//$ there is no auto completion for the any value
let data: any = 1;
// console.log((data as string).repeat(3));
