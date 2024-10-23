//display the content on the screen

function displayContent(content){
    result.value += content
}
function clearCalcScreen(){
    result.value = ""

}
function displayResult(){
    result.value = eval(result.value)

}
function deleteContent(content){
    result.value =- content
}

function removeLastDigit(){
    result.value =  result.value.slice(0,-1)
}
