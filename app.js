const input = document.querySelector(".input_name")
const addBtn = document.querySelector(".subbtn")
const clear = document.querySelector("clear")
const trash = document.querySelector(".fa-trash")
const list = document.querySelector(".new")



addBtn.addEventListener("click" , submit);

function submit(e){
    e.preventDefault()

    const product = document.createElement("div");
    product.classList.add("products");
    const newProduct =`
    <li>${input.value}</li>
    <span>
    <i class="fa-solid fa-trash"></i>
    </span>
    `
    product.innerHTML = newProduct;
    list.appendChild(product);
    input.value = ""
    
};