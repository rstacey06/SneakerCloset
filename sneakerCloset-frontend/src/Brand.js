class Brand {

  static all = []

  constructor({id, name} ){
    this.name = name
    this.id = id

    this.element = document.createElement('div')
    this.element.className = "brand"
    this.element.id = `brand-${this.id}`

    Brand.all.push(this)
  }

  shoes(){
    return Shoe.all.filter(function(shoe){
      return shoe.brandId === this.id
    }, this)
  }

  fullRender(){
    this.element.innerHTML = `
      <h1>${this.name}</h1>
      <!-- <h3>This brand's Shoes:</h3> -->
      ${this.shoes().map(shoe => shoe.name).join(", ")}
      <br>
    `
    return this.element
  }

}
