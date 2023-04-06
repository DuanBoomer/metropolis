const database = require('../data/data_new.json')

const exportData = []
database.forEach(function(entry, index){

    let exportDataEntry = {
        id: index,
        name: entry.name,
        price: entry.price,
        long_description: entry.long_description,
        rating: entry.rating,
        main_image: entry.image.main,
        secondary_images: entry.image.secondary,
        quantity: entry.quantity_available,
        specifications: entry.specifications,
    }

    exportData.push(exportDataEntry)

})


export default exportData

