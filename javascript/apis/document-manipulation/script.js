// Input section
const orderedList = document.querySelector("ol");
const input = document.querySelector("input")
const addButton = document.querySelector("button");
 
// warning text for empty list
const div = document.querySelector("div");




// list creation
addButton.addEventListener("click",() => {
    const inputValue = input.value;

    if (inputValue) {
        // create elements for the list item
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        listItem.innerText = inputValue;
        deleteButton.innerText = "Delete";

        listItem.appendChild(deleteButton);

        orderedList.appendChild(listItem);

        // list deletion
        deleteButton.addEventListener("click", () => {
            orderedList.removeChild(listItem);
        });

        input.focus();
    }
    else {
    
        if (!div.querySelector(".warning")){
            const warningPara = document.createElement("p");
            warningPara.innerText = "Empty input";
            warningPara.classList.add("warning");
            warningPara.style.color = "red";
            div.append(warningPara);
        }
        
    }
    
});



