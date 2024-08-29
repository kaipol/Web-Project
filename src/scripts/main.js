const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");

const myButtonUsr = document.getElementById("change user");
const myButtonPic = document.getElementById("add pic");

const myButtonList = document.getElementById("add list");
const list = document.createElement("ul");
const info = document.createElement("p");
document.body.appendChild(info);
document.body.appendChild(list);

//添加用户按钮的点击事件
myButtonUsr.onclick = function () {
    const myName = prompt("请输入你的名字。");
    if (!myName) {
        myHeading.textContent = "Welcome to my site!";
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hello, " + myName;
    }
};

//点击图片切换图片
myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/i-008.jpg") {
        myImage.setAttribute("src", "./images/i-011.jpg");
    } else {
        myImage.setAttribute("src", "./images/i-006.jpg");
    }
};

//添加图片按钮的点击事件
myButtonPic.onclick = function () {
    const src = prompt("Enter the URL of an image");
    const img = document.createElement("img");
    if (src) img.src = src;
    document.body.appendChild(img);
};

//添加列表按钮的点击事件
info.textContent =
    "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";
myButtonList.onclick = function () {
    const listItem = document.createElement("li");
    const listContent = prompt(
        "What content do you want the list item to have?"
    );
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (e) {
        e.stopPropagation();
        const listContent = prompt("Enter new content for your list item");
        this.textContent = listContent;
    };
};
