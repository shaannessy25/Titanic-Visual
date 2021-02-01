import data from './titanic-data.js'

const titanicEmbarked = document.querySelector('#titanic-embarked')
const portColor = { S: 'tomato', C: 'cornflowerblue', Q: 'orange', undefined: 'limegreen', total: 'gray' }

const embarkedCount = data.reduce((acc, p) => {
  if (acc[p.fields.embarked] === undefined){
    acc[p.fields.embarked] = 1
  } else {
    acc[p.fields.embarked] += 1
  }
  return acc
}, {})

embarkedCount.total = data.length

const embarkedKeys = Object.keys(embarkedCount)


embarkedKeys.forEach((e) => {
  const el = document.createElement('div')
  titanicEmbarked.appendChild(el)
  el.style.width = '30px'
  const count = embarkedCount[e]
  const percent = count / data.length * 100
  el.style.height = `${percent}%`
  el.style.backgroundColor = portColor[e]
  el.style.margin = '2px'
})


titanicEmbarked.style.display = 'flex'
titanicEmbarked.style.alignItems = 'flex-end'
titanicEmbarked.style.border = '1px solid'
titanicEmbarked.style.width = '300px'
titanicEmbarked.style.height = '300px'













// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 15px)'
titanic.style.gridGap = '2px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})



// data.sort((a, b) => {
//   if (a.fields.survived === 'Yes'){
//     return -1
//   }
//   return 1
// })
function sortEmbarked() {
  data.sort((a, b) => {
    if (a.fields.embarked < b.fields.embarked){
      return -1
    } else if (a.fields.embarked > b.fields.embarked){
      return 1
    }
    return 0
  })
}

function sortAge() {
  data.sort((a, b) => {
    return a.fields.age - b.fields.age
  })
}

function sortFare() {
  data.sort((a, b) => {
    return a.fields.fare - b.fields.fare
  })
}


data.sort((a, b) => {
  if (a.fields.sex === 'female'){
    return 1
  }
  return 1
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})



// Let's loop over each passenger and set some styles 
function renderPassengers() {
  passengers.forEach((p, i) => {
    p.classList.add('passenger')
    p.dataset.id = i
    p.style.width = '15px'
    p.style.height = '15px'
    p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0%'
    p.style.opacity = data[i].fields.survived === 'Yes' ? '1' : '0.5'
    p.style.backgroundColor = portColor[data[i].fields.embarked]
  })
}


renderPassengers()




const passengerDetail = document.querySelector('#passenger-details')


document.body.addEventListener('mouseover', (e) => {
  if(e.target.matches('.passenger')){
    const id = e.target.dataset.id
    const fields = data[id].fields
    passengerDetail.style.position = 'absolute'
    passengerDetail.style.display = 'block'
    passengerDetail.style.left = `${e.pageX + 3}px`
    passengerDetail.style.top = `${e.pageY + 3}px`
    passengerDetail.style.backgroundColor = '#fff'
    passengerDetail.style.border = '1px solid'
    passengerDetail.style.padding = '.5em'
    passengerDetail.innerHTML = `
   <strong>${fields.name}</strong>
   <ul>
    <li>Age: ${fields.age}</li>
    <li>Fare: ${fields.fare}</li>
   </ul>
   `
  }
})

document.body.addEventListener('mouseout', (e) => {
  if (e.target.matches('.passenger')){
    passengerDetail.style.display = 'none'
  }
})






document.body.addEventListener('click', (e) => {
  if(e.target.matches('.sort-by-age')){
    sortAge()
    renderPassengers()
  } else if (e.target.matches('.sort-by-fare')){
    sortFare()
    renderPassengers()
  } else if (e.target.matches('.sort-by-embarked')){
    sortEmbarked()
    renderPassengers()
  }
})

















// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q', and undefined



