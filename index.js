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
// let promise = new Promise(function(resolve, reject) {
//   reject()
// }).then(()=>{
//   console.log('resolve:成功');
// }).catch(()=>{
//   console.log('reject:失敗');
// });

// async function を定義
// const promiseAsync = async (ms) => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });

//   // Promiseの結果が返ってくるまで実行されない
//   console.log(`Promise成功!`);
// };

// // 非同期関数を呼び出す
// promiseAsync(1000); // 1000ms（1秒）待つ
// console.log("先に出力");

async function asyncFunction() {
  var sample = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 1000);
  });

  await sample; // 非同期処理が完了するのを待つ

  console.log("Promise成功!");
}

asyncFunction(); // 非同期関数を呼び出す

console.log("先に出力");
