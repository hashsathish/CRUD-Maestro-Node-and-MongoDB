const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/maestro', { useNewUrlParser: true, useUnifiedTopology: true,
useFindAndModify: false,}).then(() => {
    console.log("mongo connection open!")
})
.catch(err => {
    console.log("mongo connection error!")
    console.log(err)
})

// const p = new Product({
//     name: 'Yamahaf280',
//     price: 6990,
//     category: 'guitar'
// })

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })
const seedProducts = [
    {
        name: 'Yamahaf310',
        price: 9800,
        category: 'guitar'
    },
    {
        name: 'Yamahaf51',
        price: 7300,
        category: 'piano'
    },
    {
        name: 'Yamahae263',
        price: 9400,
        category: 'piano'
    },
    {
        name: 'Black drumset',
        price: 22800,
        category: 'drums'
    }
]

Product.insertMany(seedProducts)
.then(res => {console.log(res)})
.catch(err => {console.log(err)})
