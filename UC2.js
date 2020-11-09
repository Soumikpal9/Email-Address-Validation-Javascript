const emailRegex = RegExp("^abc[.a-zA-Z0-9]*@[a-zA-Z0-9].*$");

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
    emailTest("abc@.com");
}catch(e){
    console.error(e);
}