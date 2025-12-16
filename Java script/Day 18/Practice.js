/* // 1. var, let, const declarations
var fruit = Apple;
let animal = Lion;
const bird = Eagle;

// 2. Redeclaring let

// (uncomment to see error)
// let animal = orange; // SyntaxError

// 3. TDZ error 

console.log(num);
let num = 10; //  ReferenceError (Temporal Dead Zone)

// 4. Block scope test
{
  var v = "var scope";
  let l = "let scope";
  const k = "const scope";
}

 console.log(v); // block-scoped (escapes the block)

 // ReferenceError

//  console.log(l); // Not block-scoped (stays inside the block)
//  console.log(k); // Not block-scoped (stays inside the block)

// 5. const object modify
 */
const user = { name: "swathi", age: 20 };
user.age = 21;     //  allowed
user.city = "NY"; //  allowed
console.log(user);

// user = {}; // TypeError
