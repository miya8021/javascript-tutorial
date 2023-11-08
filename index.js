//promise処理を追加
// function taskA() {
//     console.log("タスクAを実行 at " + Date.now());
// }
// function taskB() {
//     console.log("タスクBを実行 at " + Date.now());
// }
// function taskC() {
//     console.log("タスクCを実行 at " + Date.now());
// }

// taskA();
// new Promise((resolve) => {
//   setTimeout(() => {
//       taskB();
//       resolve();
//   }, 1000);
// }).then(() =>{
//   taskC();
// })

//status resolveを実行
// let promise = new Promise(function(resolve) {
//   resolve()
// }).then(()=>{
//   console.log('resolve:成功');
// });

//status rejectを実行
//catchにて実行される関数がreturnした値をresolveしている＝catchにて返されたpromiseオブジェクトのPromiseStatusはresolveになる
let promise = new Promise(function(resolve, reject) {
  reject()
}).then(()=>{
  console.log('resolve:成功');
}).catch(()=>{
  console.log('reject:失敗');
});
