const inputTag= document.getElementsByClassName("form-control")[0];
const shoppingListsContainer= document.getElementsByClassName("shoppingListContainer")[0];

let productId=1;
const handleChange= (event) => {
    const inputValue= event.target.value;
    const productContainer= document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv= document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExist= parentDiv.classList.contains("purchased")
        if (classExist) {
            parentDiv.classList.remove("purchased")
        }else {
            parentDiv.classList.add("purchased")
        }
    } )
    const spanTag=document.createElement("span");
    spanTag.id = productId;
    const trashIcon= document.createElement("i");
    trashIcon.classList.add("fa-regular", "fa-trash-can");
    trashIcon.addEventListener("click", () => {
        productContainer.remove()
    })
    const product = productId.toString() + ". "+ inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListsContainer.append(productContainer);
    inputTag.value="";
    productId +=1;
}
inputTag.addEventListener("change", handleChange)