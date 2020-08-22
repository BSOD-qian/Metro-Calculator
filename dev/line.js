var myCars = [
    '浦东机场捷运系统<br/>JY0101<br/>JY010011<br/>特殊性：首列交付<hr/>',
function findone() {
    mykey = document.getElementById("mykeyword").value;
    myfind = document.getElementById("myfind").value;
    myfind = "";
    for (i in myCars) {
        if (myCars[i].search(mykey) >= 0) { myfind = myfind + myCars[i] + "" }
    }
    document.getElementById("myfind").innerHTML = myfind;
}
