let username = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let photo = document.querySelector("#image");
let form = document.querySelector("form");
let usersContainer = document.querySelector(".users");

const usermanager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitform.bind(this));
    },

    submitform: function (e) {
        e.preventDefault();
        this.adduser();
    },

    adduser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });

        form.reset();
        this.renderUI();
    },

    renderUI: function () {

        usersContainer.innerHTML = "";

        this.users.forEach((user, index) => {

            let card = document.createElement("div");
            card.className = "cards";

            let img = document.createElement("img");
            img.src = user.photo;

            let h2 = document.createElement("h2");
            h2.textContent = user.username;

            let h4 = document.createElement("h4");
            h4.textContent = user.role;

            let p = document.createElement("p");
            p.textContent = user.bio;

            let btn = document.createElement("button");
            btn.textContent = "Delete";

            btn.addEventListener("click", () => {
                this.removeUser(index);
            });

            card.append(img, h2, h4, p, btn);

            usersContainer.appendChild(card);

        });

    },

    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    }

};

usermanager.init();
