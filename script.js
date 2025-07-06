
const createBtn = document.getElementById('createBtn')

const hero = document.querySelector('.hero')

const colorName = document.getElementById('colorName')

function isValidColor(color) {
  const s = new Option().style;   // 🔹 Naya HTML <option> element ka style object banaya
  s.color = color;                // 🔹 Uske style mein color assign kiya (jo user ne diya)
  return s.color !== '';          // 🔹 Agar color valid hai toh CSS use karega, warna empty string rahega
}


createBtn.addEventListener('click', () => {

    const color = colorName.value.trim()
    
    if(isValidColor(color)){
        const newButton = document.createElement('button')
        newButton.className = 'newBtn'
        newButton.innerText = color
        newButton.style.backgroundColor = color
        hero.appendChild(newButton)

        newButton.addEventListener('click', () => {
            document.body.style.backgroundColor = color
        })
    }
    else{
        alert('Please give a valid Color Name')
    }

})
