const emailRegex = RegExp("^(abc)([.-_+]){0,1}[a-zA-Z0-9]*@[a-zA-Z0-9].([a-zA-Z].)?[a-zA-Z]$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email Address!");
    else throw "Invalid Email Address!";
}

try{
    emailTest("abc.xyz@gmail.co.in");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@gamil.com.com.in");
}catch(e){
    console.error(e);
}