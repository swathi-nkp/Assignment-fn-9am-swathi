// 1. Declare variables for all 7 primitive types

  let str = "Hello";          
  let num = 42;               
  let big = 1234567890123n;   
  let bool = true;            
  let undef;                  
  let empty = null;           
  let sym = Symbol("id");     

  // 2. Check types

  console.log(typeof str);    
  console.log(typeof num);    
  console.log(typeof big);   
  console.log(typeof bool);   
  console.log(typeof undef);  
  console.log(typeof empty);  
  console.log(typeof sym);    

  // 3. Create an object with 3 properties

  const person = {
    name: "Swathi N",
    age: 21,
    city: "Chennai"
  };

  console.log(person.name); 
  console.log(person.age);  
  console.log(person.city); 

  // 4. Convert "45" to a number

  let numStr = "100";
  let convertedNumber = Number(numStr);
  console.log(convertedNumber);       
  console.log(typeof convertedNumber); 

  // 5.Convert false to a string

  let flag = false;
  let stringValue = String(flag);
  console.log(stringValue);        // "false"
  console.log(typeof stringValue); // string
