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
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data) {

  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();

  // xhr.open(method, url);

  // xhr.responseType = 'json';

  // xhr.onload = function () {
  //   resolve(xhr.response);
  //   // const listOfPosts = JSON.parse(xhr.response);
  // };

  // xhr.send(JSON.stringify(data));

  // });

  // return promise;
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    } else {

      throw new Error('something wrong -server side')
    }

  })
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/pos'
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
    console.log('werwer')
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post!');