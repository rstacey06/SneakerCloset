//We can some server requests for data

//Get all shoes
//Get all Brands

const shoesAdapter = new ShoesAdapter("http://localhost:3000/shoes")
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

shoesAdapter.fetchShoes()
brandsAdapter.fetchBrands()

//Add event listener on menu buttons
//Select our main div

const main = document.getElementById('main')
const menu = document.getElementById('menu')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick (event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){

  if(event.target.tagName == "BUTTON"){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newShoeObj = {
      name: inputs[0].value,
      style: inputs[1].value,
      colorway: inputs[2].value,
      condition: inputs[3].value,
      size: inputs[4].value,
      brandId: select.value
    }
    shoesAdapter.newShoe(newShoeObj)
  }
}

const callbacks = {
  allShoes: renderAllShoes,
  shoesBrands: renderAllShoesBrands,
  newShoe: renderNewShoeForm,
  // newBrand: renderNewBrandForm
}

function renderAllShoes(){
  Shoe.all.forEach(shoe => {
    main.appendChild(shoe.fullRender())
  })
  //render all shoe with name and brand
}

function renderAllShoesBrands(){
  Brand.all.forEach(brand => {
    main.appendChild(brand.fullRender())
  })
}

function renderNewShoeForm(){
  formDiv.innerHTML = `
    Shoe Name:
    <input type="text" />
    <br>
    Shoe Style:
    <input type="text" />
    <br>
    Colorway:
    <input type="text" />
    <br>
    Condition:
    <input type="text" />
    <br>
    Shoe Size:
    <input type="text" />
    <br>
    <select>
       <option value="default" selected="selected">Select a Brand </option>
     ${Brand.all.map(brand => {
       return `<option value=${brand.id}>${brand.name}</option>`
     }).join("")}
    </select>
    <button>Add New Shoe!</button>
  `
  main.appendChild(formDiv)
}
