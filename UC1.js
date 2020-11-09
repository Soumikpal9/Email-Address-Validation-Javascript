const emailRegex = RegExp("^abc.*$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email Address!");
    else throw "Invalid Email Address!";
}

try{
    emailTest("abc@gmail.com");
}catch(e){
    console.error(e);
}

try{
    emailTest("@gmail.com");
}catch(e){
    console.error(e);
}