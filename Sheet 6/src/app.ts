let unameLabel = document.getElementById("uname") as HTMLLabelElement;
let username = document.getElementById("username") as HTMLInputElement;

let passLabel = document.getElementById("pass") as HTMLLabelElement;
let password = document.getElementById("password") as HTMLInputElement;

let semLabel = document.getElementById("sem") as HTMLLabelElement;
let semester = document.getElementById("semester") as HTMLSelectElement;

let cpp = document.getElementById("cpp") as HTMLInputElement;
let js = document.getElementById("js") as HTMLInputElement;
let math = document.getElementById("math") as HTMLInputElement;

let ur = document.querySelector(".ue") as HTMLParagraphElement;
let pr = document.querySelector(".pe") as HTMLParagraphElement;
let sr = document.querySelector(".se") as HTMLParagraphElement;
let cr = document.querySelector(".ce") as HTMLParagraphElement;

let submit = document.querySelector("input[type='submit']") as HTMLInputElement;

let div = document.querySelector(".container") as HTMLDivElement;
function checkUsername(): boolean {
    let valid = false;
    if (isRequired(username.value)) {
        unameLabel.style.color = "red";
        ur.innerHTML = "Username is required";
    } else if (username.value.length < 5 || username.value.length > 15) {
        unameLabel.style.color = "red";
        ur.innerHTML = "Username must be between 5 and 15 characters";
    } else {
        unameLabel.style.color = "black";
        ur.innerHTML = "";
        valid = true;
    }
    return valid;
}

function checkPassword(): boolean {
    let valid = false;
    if (isRequired(password.value)) {
        passLabel.style.color = "red";
        pr.innerHTML = "Password is required";
    } else if (!isPasswordSecure(password.value)) {
        passLabel.style.color = "red";
        pr.textContent = "Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character";
    } else {
        passLabel.style.color = "black";
        pr.innerHTML = "";
        valid = true;
    }
    return valid;
}

const isPasswordSecure = (password: string): boolean => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])[A-Za-z\\d!@#\\$%\\^&\\*]{8,}$");
    return re.test(password);
};

function isRequired(s: string): boolean {
    return s.trim() === "";
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;
    if (!checkUsername()) valid = false;
    if (!checkPassword()) valid = false;

    if(semester.value === "") {
        semLabel.style.color = "red";
        sr.innerHTML = "Select a semester";
        valid = false;
    }
    if(js.checked && (semester.value === "first" || semester.value === "second")) {
        semLabel.style.color = "red";
        sr.innerHTML = "JavaScript cannot be selected in semester 1 or 2";
        sr.style.color = "red";
        valid = false;
    }
    if(valid)
    {
        let txt = document.createElement("textarea")
        div.appendChild(txt);
        txt.style.width = "100%";
        txt.style.height = "100px";
        txt.innerHTML = `Username: ${username.value}\nPassword: ${password.value}\nSemester: ${semester.value}\nCourses: `;
        if(cpp.checked) txt.innerHTML += "comp104 ";
        if(js.checked) txt.innerHTML += "comp206 ";
        if(math.checked) txt.innerHTML += "math101 ";
        txt.innerHTML += "\n";

        txt.addEventListener("mouseenter", () => {
            let x = confirm("Is this valid data?\n" + txt.innerHTML);
            if (x) {
                let win = window.open("", "validation", "width=500,height=500");
                if (win) {
                    win.document.write(`
                        <html>
                        <head>
                            <title>Thank You</title>
                        </head>
                        <body>
                            <h1 id="message">Thanks for your registration</h1>
                            <script>
                                const msg = document.getElementById("message");
                                const colors = ["red", "blue", "green", "purple", "orange", "black"];
                                const sizes = ["24px", "28px", "32px", "36px", "40px", "44px"];
                                let i = 0;
                                setInterval(() => {
                                    i = (i + 1) % colors.length;
                                    msg.style.color = colors[i];
                                    msg.style.fontSize = sizes[i];
                                }, 300);
                            </script>
                        </body>
                        </html>
                    `);
                    win.document.close();
                } else {
                    alert("Popup blocked! Please allow popups for this site.");
                }
            }            
        });
        
    }
});

username.addEventListener("focus", () => {
    unameLabel.style.color = "black";
    ur.innerHTML = "";
});

password.addEventListener("focus", () => {
    passLabel.style.color = "black";
    pr.innerHTML = "";
});

semester.addEventListener("focus", () => {
    semLabel.style.color = "black";
    sr.innerHTML = "";
});