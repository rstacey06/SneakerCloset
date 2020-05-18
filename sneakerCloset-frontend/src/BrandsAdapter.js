class BrandsAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  fetchBrands(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(obj => {
          let sanitized = {id: obj.id, ...obj.attributes}
          new Brand(sanitized)
        })
      })
      .then(() => console.log(Brand.all))
  }
}
