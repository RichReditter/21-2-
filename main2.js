// let loadJs = src => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.onload = resolve;
//         script.onerror = reject;
//         script.src = src;
//         document.head.append(script);
//     });
// }

// loadJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js')
//     .then(() => loadJs('https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'))
//     .then(() => {
//     setTimeout(() => {
//         $('.modal').modal('show');
//     }, 1000);
//     })
//     .catch(() => {
//     console.error('Ошибка при загрузки скриптов!');
// });

async function sync(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Привет!')
        },1000)
        })
        let result = await promise
        promise
        .then( () =>{
            alert(result)
        })
}
sync()


