const emailRegex = RegExp("^abc[.a-zA-Z0-9]*@[a-zA-Z0-9].([a-zA-Z].)?[a-zA-Z]$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email Address!");
    else throw "Invalid Email Address!";
}

try{
    emailTest("abc@gmail.co.in");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@gamil.com.com.in");
}catch(e){
    console.error(e);
}