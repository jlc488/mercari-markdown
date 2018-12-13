const mongoose = require('mongoose')

const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

const WikiItem = require('../models/WikiItem.Model')

mongoose.Promise = global.Promise

before((done) => {
    mongoose.connect(`mongodb://jlc488:97Queen$**@ds025792.mlab.com:25792/sinny_mongo_db`, {
        useNewUrlParser: true
    })
    mongoose.connection
    .once('open', () => {
        done()
    })
    .on('error', (err) => {
        console.log(err)
    })
})

// beforeEach(async () => {
//     const collections = await mongoose.connection.db.collections()

//     for(let col of collections) {
//         await col.deleteOne()
//     }
// })

describe('Mongoose Test', () => {
    it('Adding WikiItem',async () => {
        const item = {
            _id: '5c115460b736b251e8af82e6',
            title: 'test title',
            creator: 'sinny-creator',
            content: 'test content',
            updater: 'sinny-updater'
        }
        const newItem = new WikiItem(item)
        await expect( newItem.save(), item)
    })//Add WikiItem

    it('Read WikiItem', async () => {
        const ret = await WikiItem.findOne({_id:'5c115460b736b251e8af82e6'})

        console.log(ret)

        await expect(ret.title).eq('test title')
    })
})