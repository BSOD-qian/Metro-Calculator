var myCars = [
    '线路：1号线<br/>车型：01A01（老老八）<br/>车号：01001<br/>车体号：92011<br/>上线日期：2009<br/>特殊性：张江实训专用车<hr/>',
    '线路：1号线<br/>车型：01A01（老老八）<br/>车号：01001<br/>车体号：92022<br/>上线日期：2009<br/>特殊性：张江实训专用车<hr/>',
function findone() {
    mykey = document.getElementById("mykeyword").value;
    myfind = document.getElementById("myfind").value;
    myfind = "";
    for (i in myCars) {
        if (myCars[i].search(mykey) >= 0) { myfind = myfind + myCars[i] + "" }
    }
    document.getElementById("myfind").innerHTML = myfind;
}
