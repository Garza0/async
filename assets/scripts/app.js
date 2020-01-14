// const button = document.querySelector('button')

// const getPosition = opts => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       success => {
//         resolve(success)
//       },
//       error => {
//         reject(error)
//       },
//       opts
//     )
//   })
//   return promise
// }

// // getPosition()
// //   .then(posData => {
// //     positionData = posData
// //     return setTimer(2000)
// //   })
// //   .catch(err => {
// //     console.log(err)
// //     return 'all is ok...'
// //   })
// //   .then(data => {
// //     console.log(data, positionData)
// //   })


// async function trackUserHandler() {
//   let posData
//   let timerData
//   try {
//     posData = await getPosition()
//     timerData = await setTimer(2000)
//   } catch (error) { console.log(timerData, posData) }
// }



// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done')
//     }, duration)

//   })
//   return promise
// }

// // setTimer(2000).then(data => {
// //   console.log(data)
// // })





// button.addEventListener('click', getPosition)


//==================================
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')

const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xhr.responseType = 'json'

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response)
  const listOfPosts = xhr.response
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true)
    postEl.querySelector('h2').textContent = post.title.toUpperCase()
    postEl.querySelector('p').textContent = post.body
    listElement.append(postEl)

  }

}

xhr.send()





// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))