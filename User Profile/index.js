function submit() {
var fn = document.getElementById('firstName').value;
var ln = document.getElementById('lastName').value;
var age = document.getElementById('age').value;
var motto = document.getElementById('motto').value;
var pic = document.getElementById('pic').value;

if (fn == "" || ln == "" || age == "" || motto == "" || pic == ""){
    alert("Invalid input!");
    return false;
}

else if (fn == document.getElementById('firstName').value && ln == document.getElementById('lastName').value){


    document.getElementById('fullName').value = fn + " " +ln;

}

if (age < 18){

    document.getElementById('ageOut').value = age;
    document.getElementById('ageMsg').value = "You are a minor!";
}

else if (age >= 18 && age < 60){

    document.getElementById('ageOut').value = age;
    document.getElementById('ageMsg').value = "You are not a minor!";
}

else if (age > 59){

    document.getElementById('ageOut').value = age;
    document.getElementById('ageMsg').value = "You are old!";
}

else if (pic == document.getElementById('pic').value){

    document.getElementById('picture').value = pic;
}

else (motto == document.getElementById('motto'))

    document.getElementById('mottoO').value = motto



}
