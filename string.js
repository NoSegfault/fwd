
// query string processing
var s, str;

function getKeyword(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("q:");
    var after = str.indexOf(" count");
    s.innerHTML = str.substring(0, before+3) + val + str.substring(after-1);
}

function getCount(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("count:");
    var after = str.indexOf(" page:");
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);

}

function getPage(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("page:");
    var after = str.indexOf(")");
    s.innerHTML = str.substring(0, before+5) + val + str.substring(after);
}

function getCountTweet(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("count:");
    var after = str.indexOf(' ', before+6);
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);
}

function getType(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("type");
    var after = str.indexOf('"', before+6);
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);
}

function getOptionalParas(key, val){
    s = document.getElementById("string");
    str = s.innerHTML;
    if(str.indexOf(key) == -1){
        var i = str.indexOf(")");
        s.innerHTML = str.substring(0, i) + key + "&quot;" + val + "&quot; " + str.substring(i);
    }
    else{
        var before = str.indexOf(key);
        var after = str.indexOf('"', before+key.length+1);
        s.innerHTML = str.substring(0, before+key.length+1) + val + str.substring(after);
    }
}
