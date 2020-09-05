
export const getImagesNames = () => {
    const r = require.context('./assets/imgs', false, /\.(jpe?g|png|gif|svg)$/);
    let importedImgs = []
    // return an array list of filenames (with extension)
    const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);
    importAll(r).array.forEach(element => {
        let productData = {    
            product_name: "Roupa Braba",
            price: Math.floor(Math.random() * (500 - 59 + 1)) + 59,
            img_name: element
        }
        fetch('/.netlify/functions/insert-new-product', {
            body: JSON.stringify(productData),
            method: 'POST'
          })
        .then((response)=>{

        })
    });
};
  
