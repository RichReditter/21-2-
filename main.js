// final variant
// спросить , зачем promise в xhr
const request = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
        xhr.status === 200 ? resolve(xhr.response) : reject(xhr.statusText);
        }
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

document.body.querySelector('#get-text').onclick = () => {
    request('https://itchief.ru/examples/ajax/01.html')
  .then( data =>{
      document.querySelector('#result').innerHTML = data
  })
  .catch( error => {
      console.log()
  })
}

//  спросить почему это не работает??
// const getText = document.querySelector('#get-text');
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         getText.onclick = () =>{
//             request('https://itchief.ru/examples/ajax/01.html', data => {
//                 if(data){
//                     resolve(data)
//                 }
//                 else{ 
//                     reject(data)
//                 }
//             })
//         }
            
//     },2500)
    
// });
// promise
// .then( data => {
//     document.querySelector('#result').innerHTML = data;
// })
// .catch( () => {
//     console.log('error detected')
// })
// .finally( () => {
//     console.log('код работает, вроде...')
// })

// 
// 
// 
const randomColor = Math.floor(Math.random()*1000000)

const changingColorDiv = document.body.querySelector('#colorChanger')



const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sleep(5000).then( () => {
    changingColorDiv.style.backgroundColor = `#${randomColor}`
  })
  sleep(5500).then( () => {
    changingColorDiv.style.backgroundColor = 'white'
    changingColorDiv.style.backgroundColor = `#${randomColor}`
  })
  sleep(5000).catch( () => {
      console.log('ошибка')
  })
