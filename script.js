function my_function() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("pass").value;
    div = document.getElementById("see_infor");
    div.innerHTML = account + "  " + password;
    alert("Admin sẽ lập danh sách và phát code sau ngày 11/08/2021!. Vui lòng không đổi mật khẩu!");
}