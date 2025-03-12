document.addEventListener("DOMContentLoaded", function() {
  const showExecutorBtn = document.getElementById("showExecutorBtn");
  const executor = document.getElementById("executor");
  const closeExecutorBtn = document.getElementById("closeExecutorBtn");
  const exeBtn = document.getElementById("exeBtn");
  const clearBtn = document.getElementById("clearBtn");
  const executorTextBox = document.getElementById("executorTextBox");

  showExecutorBtn.addEventListener("click", function() {
    executor.style.display = "block"; // Show the executor UI
  });

  closeExecutorBtn.addEventListener("click", function() {
    executor.style.display = "none"; // Hide the executor UI
  });

  clearBtn.addEventListener("click", function() {
    executorTextBox.value = ""; // Clear the textbox content
  });

  exeBtn.addEventListener("click", function() {
    alert("EXE button clicked!"); // For testing the button
  });
});
