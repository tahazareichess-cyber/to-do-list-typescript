const task = document.getElementById("input");
const button = document.getElementById("btn");
const place = document.querySelector(".inside");
button?.addEventListener("click", () => {
    const insidePlace = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const taskIn = document.createElement("p");
    deleteBtn.textContent = "DELETE";
    insidePlace.classList.add("todo-connny");
    deleteBtn.classList.add("deletyyy");
    taskIn.classList.add("taskyy");
    deleteBtn.addEventListener("click", () => {
        insidePlace.remove();
    });
    taskIn.textContent = task?.value ?? "";
    insidePlace.append(taskIn);
    insidePlace.append(deleteBtn);
    place?.append(insidePlace);
    if (task) {
        task.value = "";
    }
});
export {};
//# sourceMappingURL=index.js.map