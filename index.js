function taskA() {
    console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
    console.log("タスクBを実行 at " + Date.now());
}
function taskC() {
    console.log("タスクCを実行 at " + Date.now());
}

taskA();
new Promise((resolve) => {
  setTimeout(() => {
      taskB();
      resolve();
  }, 1000);
}).then(() =>{
  taskC();
})
