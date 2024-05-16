let inputComment = document.getElementById("inputComment");
let Send = document.getElementById("Send");
let MobileBody = document.getElementById("MobileBody")
let comment = document.getElementById("comment")
Send.addEventListener("click", () => {
    if (!inputComment.value == "") {
        MobileBody.innerHTML += `
        <div class="Mobile_chat__top_body flex flex-col items-start gap-4 px-1 relative">
            <p class="Mobile_chat__top_body__txt ">${inputComment.value}</p>
        </div>
        `
        inputComment.value = ""
    }
    else {
        comment.style.borderColor = "red"
        setInterval(() => {
            comment.style.borderColor = "transparent"
        } , 1000)
    }
})