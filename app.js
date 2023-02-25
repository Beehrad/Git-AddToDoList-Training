const input = document.querySelector(".input_name")
const addBtn = document.querySelector(".subbtn")
const clear = document.querySelector(".clear")
const list = document.querySelector(".new")



addBtn.addEventListener("click" , submit);
clear.addEventListener("click" , löchen);
list.addEventListener("click" , checkRemove)
document.addEventListener("DOMContentLoaded", getLocalStorage)  


function submit(e){
    e.preventDefault()

    const product = document.createElement("div");
    product.classList.add("products");
    const newProduct =`
    <li>${input.value}</li>
    <div>

        <span><i class="fa-solid fa-trash"></i></span>
    </div>`
    product.innerHTML = newProduct;
    list.appendChild(product);
    saveLocalStorage(input.value);
    input.value = ""
    
};

function löchen(){
    list.innerHTML = ""
    localStorage.clear();
    

};

function checkRemove(e){
    const classList = [...e.target.classList];
    const item = e.target;

    if(classList[1] === "fa-trash"){
        const todo = item.parentElement.parentElement.parentElement;
        removeLocalStorage(todo);
        todo.remove();
    }
};



function saveLocalStorage(todo){
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    savedTodos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(savedTodos));
}

function getLocalStorage(){
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    savedTodos.forEach(todo => {
        const product = document.createElement("div");
        product.classList.add("products");
        const newProduct =`
        <li>${todo}</li>
        <div>
        <span><i class="fa-solid fa-trash"></i></span>
        </div>`
        product.innerHTML = newProduct;
        list.appendChild(product);
    });
}

function removeLocalStorage(todo){
    // console.log(todo.children[0].innerText])

    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

    const filterdTodos = savedTodos.filter((t) => t !== todo.children[0].innerText);
    localStorage.setItem("todos" , JSON.stringify(filterdTodos));
}

