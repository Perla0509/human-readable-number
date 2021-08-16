module.exports = function toReadable (number) {
//making array of the digits in the way we used to read them
let resultArray = [];
let preResult = (number) => {
  while (number > 1) {
   resultArray.push(number%100)
   number = Math.floor(number / 100)
   resultArray.push(number%10)
   number = Math.floor(number / 10)
   return preResult(number)
  }
 return resultArray;
 }
resultArray = preResult(number);
console.log(resultArray);
   

let toEngRead = (resultArray) => {
  // converting into readable numbers
   let units =  ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' , 'ten']
   let teens = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   let tens = ['','','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      
   for (let i = 0; i < resultArray.length; i++) {
         switch (true) {
         case resultArray[i] == 0:
           resultArray[i] ='';
           break;
         case resultArray[i] <= 10:
               resultArray[i] = units[resultArray[i]]; 
           break;
         case resultArray[i] > 10 && resultArray[i] <= 19:
               resultArray[i] = tens[Math.floor(resultArray[i]/10%10)]; 
           break;
         case resultArray[i] > 20:
               resultArray[i] = tens[Math.floor(resultArray[i]/10)] + ' ' + units[Math.floor(resultArray[i]%10)]; 
           break;
            default:
           console.log('Error!');	
               }
           }
     
}

toEngRead(resultArray);
console.log(resultArray);
//adding placeholders

for (let i=0; i< resultArray.length;i++) {
       if ( (i+1)%2 == 0) {resultArray[i] = resultArray[i] + ' hundred';}
  }
  
console.log(resultArray);
//need to fix it with nbsp
for (let i=0; i< resultArray.length;i++) {
       let placeholder = ['thousand', 'million', 'billion'];
       counter = 0;
       if ( i>0 && i%2 == 0) { resultArray[i] = resultArray[i] + placeholder[counter];
       counter++;
       }
  }
  
// reversing and converting to string
console.log(resultArray);
resultArray = resultArray.reverse();
resultArray = resultArray.join(' ');

console.log(resultArray);
   
}
