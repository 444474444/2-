const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userId = event.target.id.value;
    let userpw1 = event.target.userpw1.value;
    let userpw2 = event.target.userpw2.value;
    let username = event.target.username.value;
    let userphone = event.target.userphone.value;
    let userposition = event.target.userposition.value;
    let usergender = event.target.usergender.value;
    let useremail = event.target.useremail.value;
    let userintro = event.target.userintro.value;

    console.log(userId, userpw1, userpw2, username,
        userphone, userposition, usergender, useremail, userintro);

    if (userId.length < 6) {
        alert("아이디는 6자 이상이어야 합니다");
        return;
    }

    if (userpw1 !== userpw2) {
        alert("비밀번호가 일치하지 않습니다");
        return;
    }

    document.body.innerHTML = "";
    document.write(`<p>${userId}님 환영합니다</p>`);
});
