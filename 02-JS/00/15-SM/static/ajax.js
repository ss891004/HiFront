/**
 * 原生ajax请求
 * @param {httpq请求方式 method 
 * @param {请求的服务器地址} url 
 * @param {请求参数} data 
 * @param {请求成功后，执行的方法} success 
 * @param {请求失败后，执行的方法} error 
 */
function $ajax(method = "get", url, data, success, error) {
    //1.创建ajax 对象
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        //兼容IE老版本
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.设置请求方式和请求方法
    if (method == "get" && data) {
        data = querystring(data);
        url += "?" + data;
    }

    //在主线程同步XMLHttpRequest是不赞成的，所有设置async:true
    xhr.open(method, url, true);

    //3.send 发送
    if (method == "get") {
        xhr.send();
    } else {

        // application/x-www-form-urlencoded    表单字符类型
        // multiline/form-data      表单类型
        // application/json
        // text/xml

        xhr.setRequestHeader("Content-type", "application/json");
        //xhr.setRequestHeader("accept", "application/json"); //如果是对象格式的数据就要转换成jsonstring 

        console.log(data);
        console.log(JSON.stringify(data));

        xhr.send(JSON.stringify(data));
        // XHR.setRequestHeader("Content-type","application/json"); 
    }

    //4.监听状态变化，接受返回数据
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            // 0,初始化,XHR对象已经创建,还未执行open  
            // 1,载入,已经调用open方法,但是还没发送请求  
            // 2,载入完成,请求已经发送完成  
            // 3,交互,可以接收到部分数据  

            if (xhr.status == 200) {
                // 200:成功  
                // 404:没有发现文件、查询或URl  
                // 500:服务器产生内部错误 
                if(success){
                    success(xhr.responseText);
                }
            } else {
                if (error) {
                    error("Error: " + xhr.status);
                }
            }
        }
    }
}

function querystring(obj) {
    var str = "";
    for (var attr in obj) {
        str += attr + "=" + obj[attr] + "&";
    }
    return str.substring(0, str.length - 1);
}

function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}