// plus minus input value increase or decrees 
function idSelectorValueTextChange(id, isValue) {
  const inputText = document.getElementById(id);
  const inputValue = parseInt(inputText.value);
  let newInputValue;
  if (isValue) {
    newInputValue = inputValue + 1;
  } else{
      newInputValue = inputValue - 1;
  }
  inputText.value = newInputValue;
  return newInputValue;
}

// ======= 2 input value + price added output
function priceIncaseOrDecrees(id, inputValue, price) {
    const textPrice  = document.getElementById(id)
    const newPrice = inputValue *  price;
    textPrice.innerText = newPrice;
    }

// simple add 
function textConvertPrice(id) {
    const priceText = document.getElementById(id);
    const price = parseInt(priceText.innerText)
    return price;
}    

function setTextElementId(id, value) {
    const tagElementId = document.getElementById(id);
    tagElementId.innerText = value;
}