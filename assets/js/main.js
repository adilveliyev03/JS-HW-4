let a = prompt('Input first number')
let b = prompt ('Input second number')
let c = prompt('Select option + , - , / , *')



function calculateNumbers(){
if (c == "+"){
result = a + b
}
else if (c == "-") {
    result = a - b
}
else if( c == "/") {
    if (b== 0 ){ 
        alert('you can not devide to zero')
    }
    else{
    result = a / b; 
    }
}
else if (c == "*"){
    result = a * b
}
else {
    alert('wrong option')
}

console.log(result)
}
function isNumber(){
    if(!isNaN(a) && !isNaN(b)){ 
        calculateNumbers()
    }
    else{
        alert("a or b is not a number")
    }
}
isNumber()





let month = {
    name: prompt('Write month')

}
function monthInfo(){
if (month.name == 'January') {
    alert('January is 1.month in a year')
}
else if (month.name == 'February'){
    alert('February is 2.month in a year')
}
else if (month.name == 'march'){
    alert('March is 3.month in a year')
}
else if (month.name == 'April'){
    alert('April is 4.month in a year')
}
else if (month.name == 'may'){
    alert('May is 5.month in a year')
}
else if (month.name == 'June'){
    alert('June is 6.month in a year')
}
else if (month.name == 'July'){
    alert('July is 7.month in a year')
}
else if (month.name == 'August'){
    alert('August is 8.month in a year')
}
else if (month.name == 'September'){
    alert('September is 9.month in a year')
}
else if (month.name == 'October'){
    alert('October is 10.month in a year')
}
else if (month.name == 'November'){
    alert('November is 11.month in a year')
}
else if (month.name == 'December'){
    alert('December is 12.month in a year')
}
else{
    alert(`${month.name} is not month`)
}
}
monthInfo()




