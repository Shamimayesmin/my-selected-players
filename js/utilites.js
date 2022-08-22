
function allInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue

}

function getTextFieldById(textId){
    const textFieldElements = document.getElementById(textId)
    const textFieldString = textFieldElements.innerText;
    const textFieldValue = parseFloat(textFieldString);
    
    return textFieldValue

}

function setTextElementById(textId,newValue){
    const textFieldElements = document.getElementById(textId)
    textFieldElements.innerText = newValue;
}


function getArrayLength(playerId){
    const table = document.getElementById(playerId);
    const totalRowCount = table.length;
    return totalRowCount
    // console.log(totalRowCount)
}