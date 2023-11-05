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
setTimeout(() => {
    taskB();
}, 1000);
taskC();
