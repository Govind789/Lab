function armstrong(){
    armval = document.getElementById("txtArm").value;
    console.log(armval);
    var power = armval.length;
    var num = 0;
    armval.split("").forEach(element => {
        num = num + element ** power;
    });
    if(armval == num & num != NaN & (parseInt(armval) === armval) == true){
        document.getElementById("resArm").innerHTML = "Yes it is a armstrong number";
    }else if(num == NaN & (parseInt(armval) === armval) == false){
        document.getElementById("resArm").innerHTML = "Enter Proper Input";
    }else{
        document.getElementById("resArm").innerHTML = "No it is not a armstrong number";
    }
}
function evenodd(){
    val = document.getElementById("txtEveOdd").value;
    if(val%2 == 0){
        document.getElementById("resEveOdd").innerHTML = "It is a Even Number";
    }else if(val%2 != 0){
        document.getElementById("resEveOdd").innerHTML = "It is a Odd Number";
    }else{
        document.getElementById("resEveOdd").innerHTML = "Enter Proper Input";
    }

}