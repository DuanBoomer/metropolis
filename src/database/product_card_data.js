const database = require('../data/data_new.json')
//name price shortdescription rating  image

const exportData = []
database.forEach(function(entry, index){

    let exportDataEntry = {
        id: index,
        name: entry.name,
        price: entry.price,
        short_description: entry.short_description,
        rating: entry.rating,
        main_image: entry.image.main,
    }

    exportData.push(exportDataEntry)

    
})

export default exportData

