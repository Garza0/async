const button = document.querySelector('button')

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success)
      },
      error => {
        reject(error)
      },
      opts
    )
  })
  return promise
}

// getPosition()
//   .then(posData => {
//     positionData = posData
//     return setTimer(2000)
//   })
//   .catch(err => {
//     console.log(err)
//     return 'all is ok...'
//   })
//   .then(data => {
//     console.log(data, positionData)
//   })


async function trackUserHandler() {
  let posData
  let timerData
  try {
    posData = await getPosition()
    timerData = await setTimer(2000)
  } catch (error) { console.log(timerData, posData) }
}



const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done')
    }, duration)

  })
  return promise
}

// setTimer(2000).then(data => {
//   console.log(data)
// })





button.addEventListener('click', getPosition)
