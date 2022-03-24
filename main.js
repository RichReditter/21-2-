const imgs = [
    'https://go64.ru/upload/quickly/cat-2143332_1280.jpg',
    'https://cdnn21.img.ria.ru/images/151546/28/1515462835_0:0:1036:587_600x0_80_0_0_a75f922e8b052d966122e1c9dc40feb4.jpg',
    'https://cdnn21.img.ria.ru/images/07e5/0a/0b/1753974972_0:117:3072:1845_1920x0_80_0_0_5fbad162a71b5c081cc51da0a8ed6f27.jpg'
]
function loading(url){
    return new Promise(function(resolve, reject){
        const img = document.createElement('img')
        img.src = url;
        img.onerror = () => {
            reject('error')
        }
        img.onload = () => {
            resolve(img)
        }
    })
}
const promises = imgs.map( img => loading(img))
Promise.race(promises)
.then( image => {
    document.body.append(image)
})




