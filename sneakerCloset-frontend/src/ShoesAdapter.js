class ShoesAdapter {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  //the adapter is going to do all fetch requests that correspond toshoes
  fetchShoes(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(this.sanitizeAndAddShoe)
      })
      .then(() => console.log(Shoe.all))
  }

  newShoe(shoeObj){
    let configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accepts": "application/json"},
      body: JSON.stringify(shoeObj)
    }
    fetch(this.baseURL, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddShoe(resObj.data))
  }

  sanitizeAndAddShoe(shoeObj){
    let sanitized = {...shoeObj.attributes, id: shoeObj.id, brandId: shoeObj.relationships.brand.data.id}
    new Shoe(sanitized)
  }
}
