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

after(async () => {
    mongoose.connection.db.dropDatabase(function(){
        mongoose.connection.close(done);
      });
})

describe('Mongoose Test', () => {
    it('Adding WikiItem',async () => {
        const item = {
            _id: '5c115460b736b251e8af82e6',
            title: 'test title1',
            creator: 'sinny-creator1',
            content: 'test content1',
            updater: 'sinny-updater1'
        }
        const newItem = new WikiItem(item)
        await expect( newItem.save(), item)
    })//Add WikiItem

    it('Read WikiItem', async () => {
        const ret = await WikiItem.findOne({_id:'5c115460b736b251e8af82e6'})
        await expect(ret.title).eq('test title1')
    })

    it('List WikiItem', async () => {
        const ret = await WikiItem.find()

        await expect(ret).to.be.an('array')
    })

    it('Update WikiItem', async () => {
        const id = '5c115460b736b251e8af82e6'

        const item = {
            title: 'test updated',
            creator: 'sinny-creator1',
            content: 'test content1',
            updater: 'sinny-updater1'
        }

        const ret = await WikiItem.findOneAndUpdate({_id: id}, item, {new: true})

        await expect(ret.title).eq(item.title)
    })
})