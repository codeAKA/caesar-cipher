// Caesar Cipher ES6

class CaesarCipherES6 {
  
    constructor(shift) {
      
      this.shift = shift;
      
    }
    
    encode(string) {
      
      this.string = string;
      let numArr = [];
      let numStr = "";
      
      string = string.toUpperCase();
      
      for (let i = 0; i < string.length; i++) {
        
        numArr[i] = string.charCodeAt(i);
        
        
        if (91 > numArr[i] && numArr[i] > 64) {
        
          if (numArr[i] + this.shift <= 90) {
          
            numArr[i] = numArr[i] + this.shift;
          
          } else {
          
            numArr[i] = numArr[i] + this.shift - 26;
          
          }
        }
        
        numStr += String.fromCharCode(numArr[i]);
        
      }
      return numStr;  
        
    }
      
    decode(string) {
      
      this.string = string;
      let numArr = [];
      let numStr = "";
      
      string = string.toUpperCase();
      
      for (let i = 0; i < string.length; i++) {
        
        numArr[i] = string.charCodeAt(i);
        
        if (91 > numArr[i] && numArr[i] > 64) {
        
          if (numArr[i] - this.shift >= 65) {
          
            numArr[i] = numArr[i] - this.shift;
          
          } else {
          
            numArr[i] = numArr[i] - this.shift + 26;
          
          }
          
        }
        
        numStr += String.fromCharCode(numArr[i]);
        
      }
    
      return numStr;  
        
  }
    
  };
  
  
  
  // Caesar Cipher ES5
  
  function CaesarCipherES5(shift) {
  
      this.shift = shift;
    
  };
  
  CaesarCipherES5.prototype.encode = function(string) {
      
      this.string = string;
      let numArr = [];
      let numStr = "";
      
      string = string.toUpperCase();
      
      for (let i = 0; i < string.length; i++) {
        
        numArr[i] = string.charCodeAt(i);
        
        
        if (91 > numArr[i] && numArr[i] > 64) {
        
          if (numArr[i] + this.shift <= 90) {
          
            numArr[i] = numArr[i] + this.shift;
          
          } else {
          
            numArr[i] = numArr[i] + this.shift - 26;
          
          }
        }
        
        numStr += String.fromCharCode(numArr[i]);
        
      }
      return numStr;  
        
    }
      
  CaesarCipherES5.prototype.decode = function(string) {
      
      this.string = string;
      let numArr = [];
      let numStr = "";
      
      string = string.toUpperCase();
      
      for (let i = 0; i < string.length; i++) {
        
        numArr[i] = string.charCodeAt(i);
        
        if (91 > numArr[i] && numArr[i] > 64) {
        
          if (numArr[i] - this.shift >= 65) {
          
            numArr[i] = numArr[i] - this.shift;
          
          } else {
          
            numArr[i] = numArr[i] - this.shift + 26;
          
          }
          
        }
        
        numStr += String.fromCharCode(numArr[i]);
        
      }
    
      return numStr;  
        
  }
  
  
  // tests in console
  
  let c6 = new CaesarCipherES6(5);
  
  console.log(c6.encode('Codewars'))
  console.log(c6.decode('BFKKQJX'))
  
  
  let c5 = new CaesarCipherES5(5);
  
  console.log(c5.encode('Codewars'))
  console.log(c5.decode('BFKKQJX'))
  
  // https://www.codewars.com/kata/caesar-cipher-helper