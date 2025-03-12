document.addEventListener("DOMContentLoaded", function() {
  const showExecutorBtn = document.getElementById("showExecutorBtn");
  const executor = document.getElementById("executor");
  const closeExecutorBtn = document.getElementById("closeExecutorBtn");
  const exeBtn = document.getElementById("exeBtn");
  const clearBtn = document.getElementById("clearBtn");
  const executorTextBox = document.getElementById("executorTextBox");

  showExecutorBtn.addEventListener("click", function() {
    executor.style.display = "block";
  });

  closeExecutorBtn.addEventListener("click", function() {
    executor.style.display = "none";
  });

  clearBtn.addEventListener("click", function() {
    executorTextBox.value = "";
  });

  exeBtn.addEventListener("click", function() {
    alert("EXE button clicked!");
  });
});