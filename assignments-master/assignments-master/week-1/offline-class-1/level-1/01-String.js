// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
	console.log("Original String:", str);
	console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
	console.log("Original String:", str);
	console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
	console.log("Original String:", str);
	console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
	console.log("Original String:", str);
	console.log("After slice:", str.slice(start, end)); //start to end -1 index
}
getSlice("Hello World", 0, 5);
/*
cont value = "harkirat singh";
let ans= value.slice(2,5);
console.log(ans);
*/
// substring
function getSubstring(str, start, end) {
	console.log("Original String:", str);
	console.log("After substring:", str.substring(start, end));
	//end is here the length of substring need not the up to whcih index.
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
	console.log("Original String:", str);
	console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");
/*
const str= "hello world";
console.log(str.replace("he","javascript"));
*/

// split
function splitString(str, separator) {
	console.log("Original String:", str);
	console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
//since the separator is " " therefor  it give the array of each words with the corresponding indexs
//if  separator is " , "  ==> array of zero index..that's whole at index = 0 only

// trim
function trimString(str) {
	console.log("Original String:", str);
	console.log("After trim:", str.trim());
}
trimString(" Hello World "); // remove extra space at beginning and end

// toUpperCase
function toUpper(str) {
	console.log("Original String:", str);
	console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
	console.log("Original String:", str);
	console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

// parseInt("42") ===> output on log will be 42 ....convert into int
// ex. parseInt("24dfwe") ==> NAN
