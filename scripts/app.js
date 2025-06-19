let Inputelement=document.querySelector("#numberInput");
Inputelement.addEventListener("input",alrt);
function alrt()
{
   console.log(numberInput.value)
    if(numberInput.value <= -10 || numberInput.value >= 10)
    {
        alert("The number should be between -10 and 10");
    }
}
const fruit={
            Name:"Apple",
            Color:"Red",
            Taste:"Sweet",
            }
console.log(fruit.Name);
let fruitnameElement=document.querySelector("#fruitName");
let  fruitcolorElement=document.querySelector("#fruitColor");
let fruittasteElement=document.querySelector("#fruitTaste");
fruitnameElement.innerHTML=fruit.Name
fruitcolorElement.innerHTML=fruit.Color
fruittasteElement.innerHTML=fruit.Taste