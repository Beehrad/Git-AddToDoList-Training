const input = document.querySelector(".input_name")
const addBtn = document.querySelector(".subbtn")
const clear = document.querySelector(".clear")
const list = document.querySelector(".new")



addBtn.addEventListener("click" , submit);
clear.addEventListener("click" , löchen);
list.addEventListener("click" , checkRemove)


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
    input.value = ""
    
};

function löchen(){
    list.innerHTML = ""
    

};

function checkRemove(e){
    const classList = [...e.target.classList];
    const item = e.target;

    if(classList[1] === "fa-trash"){
        const todo = item.parentElement.parentElement.parentElement;
        todo.remove();
    }
};

