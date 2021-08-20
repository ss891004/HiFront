function testcode() {
    console.log("this is testcode");

    // 随机生成一个6位的字符串
    //0,1,2,3,4,5,6,7,8,9 a-z, A-Z 

    var code_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var code_str = "";
    for (var i = 0; i <= 5; i++) {
        var a = parseInt(Math.random() * 10);
        code_str += code_list[a];
    }
    return code_str;
}

function testcode2(n) {
    console.log("this is testcode");

    var arr=[];

    for (var i = 1; i <= n; i++) {
        var a = parseInt(Math.random() * 123);

        //0 - 9  97- 122  65-90
        if(a>=0 && a<=9){
            arr.push(a);
        }
        else if(a>=97 && a<=122){
            arr.push(String.fromCharCode(a));
        }
        else if(a>=65 && a<=90){
            arr.push(String.fromCharCode(a));
        }else{
            //没有生成需要的字符，需要重新生成
            i--;
        }

    }

    return arr.join("");
}