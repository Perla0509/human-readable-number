module.exports = function toReadable (number){
//in fact, this general check would also do something for negative numbers
if (number == 0) {return 'zero'} else {
//making array of the digits in the way we used to read them
let resultArray = [];
let preResult = (cc) => {
  while (cc >= 1) {
   resultArray.push(cc%100);
   cc = Math.floor(cc / 100);
   resultArray.push(cc%10);
   cc = Math.floor(cc / 10);
   return preResult(cc);
  }
 return resultArray;
 }
preResult(number);  

let toEngRead = (resultArray) => {
  // converting into readable numbers
   let units =  ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' , 'ten']
   let teens = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   let tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      
   for (let i = 0; i < resultArray.length; i++) {
         switch (true) {
         case resultArray[i] == 0:
           resultArray[i] ='';
           break;
         case resultArray[i] <= 10:
               resultArray[i] = units[resultArray[i]]; 
           break;
         case resultArray[i] > 10 && resultArray[i] <= 19:
               resultArray[i] = teens[resultArray[i]%10]; 
           break;
         case resultArray[i] >= 20 && resultArray[i]%10 != 0:
               resultArray[i] = tens[Math.floor(resultArray[i]/10)] + ' ' + units[resultArray[i]%10]; 
           break;
        case resultArray[i] >= 20 && resultArray[i]%10 == 0:
               resultArray[i] = tens[Math.floor(resultArray[i]/10)]; 
           break;
            default:
           console.log('Error!');	
               }
           }
     
}
// and this can be expanded to Russian human readable numbers = another function will deal with the same array
toEngRead(resultArray);

//adding placeholders
//let toPlacehold = (resultArray) => {
//   for (let i=1; i < (resultArray.length - 1); i++) {
//     if ( (i+1)%2 == 0) {resultArray[i] = resultArray[i] + ' hundred';}
//  }
//need to fix it with nbsp for numbers over 1k and more
//for (let ii=0; i< resultArray.length;i2++) {
//      let placeholder = ['thousand', 'million', 'billion'];
//      counter = 0;
//     if ( ii>0 && ii%2 == 0) { resultArray[ii] = resultArray[ii] + placeholder[counter];
//     counter++;
//     }
//}
//}
//toPlacehold(resultArray);

// reversing and converting to string
if (resultArray[1] != '') {resultArray[1] = resultArray[1]+' hundred'};
let resultString = resultArray.reverse().join(' ');
let answer = resultString.trim();

return answer;
   
 }
}
