function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  inputField.value = "";
  const inputFieldValue = parseFloat(inputFieldValueString);
  // console.log(typeof inputFieldValueString)
  if(inputFieldValue >0){
    return inputFieldValue;}

    alert("please input a valid number");
    return "invaliid";
  
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  console.log(textElementValue);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
