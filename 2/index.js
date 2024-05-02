const input = document.getElementById('input')

function Check(){
    const value = input.value
     
    const str1 = value.split("").reverse().join("")

    if(str1 === value){
        alert("is a palidrome")
    }else{
        alert("is not a palidrome")
    }

    input.value = ""

}