const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const button = document.getElementById('pomidor-button');
const timer = document.getElementById('timer');
let isPomidorShowing = false;

function addTask() {
    if (inputbox.value === '') {
        alert("Вы должны что-то написать!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();

//
const showPomidor = (e) => {
    if (isPomidorShowing)
    {
        timer.style.display = "none";
        button.style.background = '#555';
        button.style.border = 'none';
        button.style.color = '#fff';
        isPomidorShowing = !isPomidorShowing;
    }
    else
    {
        timer.style.display = "flex";
        button.style.background = 'none';
        button.style.border = '#000 solid 1px';
        button.style.color = '#000';
        isPomidorShowing = !isPomidorShowing;
        //какой-то метод
    }
}
button.addEventListener('click', showPomidor);