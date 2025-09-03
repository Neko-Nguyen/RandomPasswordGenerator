const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordEl = document.getElementById("password");

function generatePassword() {
   let password = "";
   for (let i = 1; i <= 15; ++i) {
      let char = characters[Math.floor(Math.random() * characters.length)];
      password += char;
   }
   passwordEl.textContent = password;
}

function copyPassword() {
   const password = passwordEl.textContent;
   navigator.clipboard.writeText(password).then(() => {
      alert("Your password has been copied to clipboard!");
   });
}