document.querySelector("#push").onclick = function() {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("please enter a task");
  } else {
    
    document.querySelector("#tasks").innerHTML +=
     `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
                <i class="task-delete">x</i>
            </button>
        </div>
    `;
    var current_task = document.querySelectorAll(".delete");

    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}
