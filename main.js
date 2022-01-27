// document.getElementById("showImage").onclick = myFunction() {
//     document.getElementById("theImage").style.visibility = "visible";
// }
function myFunction() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    // document.getElementById("demo").innerHTML = x;
    document.getElementById("demo").innerHTML = "";

    if (user==="admin"&&password==="CD37609BC7292CABBC6DC81BE62D2995"||user==="yonatanz"&&password==="yonatan4321"||user==="harel2008"&&password==="harel4321"||user==="tzuf"&&password==="ghonisins"||user==="elnakam"&&password==="evyatar4321"){
        // document.writeln("hello "+user)
        // let text = "link";
        // let result = text.link( "iptv.html");
        // document.writeln(result)

    if (user==="admin"&&password==="CD37609BC7292CABBC6DC81BE62D2995"){
        document.getElementById("theImage1").style.visibility = "visible";

    }
        if (user==="yonatanz"&&password==="yonatan4321"){
            document.getElementById("theImage3").style.visibility = "visible";

        }
        if (user==="harel2008"&&password==="harel4321"){

        }
        if (user===user==="tzuf"&&password==="ghonisins"){
            document.getElementById("theImage").style.visibility = "visible";
        }
        if (user==="elnakam"&&password==="evyatar4321"){
            document.getElementById("theImage2").style.visibility = "visible";

        }
    }
    else {
        document.writeln("wrong password or user")
    }
}
