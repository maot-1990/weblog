function checkLoginParam() {
    let userName = $("#userName").val();
    let password = $("#passWord").val();
    let code = $("#code").val();

    if (userName == "") {
        alert("用户名不能为空")
        return false;
    }
    if (password == "") {
        alert("密码不能为空");
        return false;
    }
    if (code == "") {
        alert("验证码不能为空");
        return false;
    }
    return true;
}

function checkRegisterParam() {
    let userName = $("#register_userName").val();
    if (userName == '') {
        alert("用户名不能为空")
        return false;
    }
    let passWord = $("#register_passWord").val();
    if (passWord == '') {
        alert("密码不能为空")
        return false;
    }
    let nickName = $("#register_nickName").val();
    if (nickName == '') {
        alert("昵称不能为空")
        return false;
    }
    let file = $("#file").val();
    if (file == '') {
        alert("头像不能为空")
        return false;
    }
    let code = $("#register_code").val();
    if (code == '') {
        alert("验证码不能为空")
        return false;
    }
    return true;
}