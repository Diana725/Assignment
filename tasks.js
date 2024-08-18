document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const newTask = document.getElementById("task");

    // Disable the submit button by default
    submit.disabled = true;

    // Function to toggle the disabled state of the submit button
    const toggleSubmitButton = () => {
        submit.disabled = newTask.value.trim() === "";
    };

    // Add event listener to the input field to check for changes
    newTask.addEventListener("input", toggleSubmitButton);

    // Add event listener to the submit button to handle task submission
    submit.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const taskValue = newTask.value.trim();
        if (taskValue) {
            // Create a new list item for the task
            const newTaskItem = document.createElement("li");
            newTaskItem.textContent = taskValue;

            // Add the new task item to the unordered list
            const tasksList = document.getElementById("tasks");
            tasksList.append(newTaskItem);

            // Clear the input field and disable the submit button
            newTask.value = "";
            toggleSubmitButton();
        }

        return false; // Prevent form submission
    });
});


// document.addEventListener("DOMContentLoaded", () => {

//     const submit = document.getElementById("submit");
//     const newTask = document.getElementById("task");

//       // Disable the submit button by default
//     submit.disabled = true;
// })