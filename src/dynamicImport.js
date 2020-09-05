export const lazyLoadImage = (imageName) => {
    import(
      /* webpackMode: "lazy-once" */
      `./assets/imgs/${imageName}`
    )
    .then(src => {        
        console.log(src.default)
        return src.default
    })
    .catch(err => console.error(err));
};


  





export const getImagesNames = () => {
    const r = require.context('./assets/imgs', false, /\.(jpe?g|png|gif|svg)$/);
    let importedImgs = []
    // return an array list of filenames (with extension)
    const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);
    let array1 = importAll(r)
    array1.forEach(element => {
        lazyLoadImage(element)
            .then(img_src =>{
                console.log(img_src)
                importedImgs.push({imgName:element,imgSrc:img_src})
            })

    });
    console.log(importedImgs)
    
};
  