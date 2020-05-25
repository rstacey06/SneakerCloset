class Shoe{

  static all = []

  constructor({id, name, style, colorway, condition, size, brandId}){
    this.id = id
    this.name = name
    this.style = style
    this.colorway = colorway
    this.condition = condition
    this.size = size
    this.brandId = brandId

    this.element = document.createElement('div')
    this.element.className = "shoe"
    this.element.id = `shoe-${this.id}`

    Shoe.all.push(this)
  }

  brand(){
    return Brand.all.find(brand => brand.id === this.brandId)
  }

  partialRender(){
    this.element.innerHTML = `
      <h3>${this.name}</h3>
      <p>Style: ${this.style}</p>
    `
    return this.element
  }

  fullRender(){
    this.element.innerHTML = `
    <h1>${this.name}</h1>
    <p>Style: ${this.style}</p>
    <p>Colorway: ${this.colorway}</p>
    <p>Condition: ${this.condition}</p>
    <p>Size: ${this.size}</p>
    <p>Brand: ${this.brand().name}</p>

    <button class="delete" data-id="${this.id}">Delete</button>
    <!-- <button class="edit" data-id="${this.id}">edit</button> -->

    `

    this.element.addEventListener('click', handleDelete)

    function handleDelete(e){
      if (e.target.className = "delete"){
        let configObj = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accepts: "application/json"
          }
        }

        let id = e.target.dataset.id
        fetch(`http://localhost:3000/shoes/${id}`, configObj)
          .then(function(){
            console.log("Done!")
          })
          let el = document.getElementById(`shoe-${id}`)
          el.remove()
          console.log("removed!")
        }
      }
      return this.element
    }
  }
