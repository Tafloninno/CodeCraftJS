const input = document.getElementById("input")


function reverseString(str){
    return str.split("").reverse().join("")
}

function Check(){
    const value = input.value

    const reverse = reverseString(value)

    if(value === reverse  ){
        alert("is a palidrome")
    }else{
        alert("is not a palidrome")
    }

    input.value = ""

}