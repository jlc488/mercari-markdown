const WikiItem = require('../models/WikiItem.Model')

async function list(qry, offset, limit) {

    const options = {
        offset,
        limit
    }

    try{
        const ret = await WikiItem.paginate(qry, options)

        return ret
    }catch(err){
        throw Error(err)
    }
}

async function create(wiki) {
    const newWikiItem = new WikiItem({
        creator: 'sinny',
        ...wiki
    })

    try{
        const ret = await newWikiItem.save()

        return ret
    }catch(err){
        throw Error(err)
    }
}

async function read(id) {
    try{
        const ret = await WikiItem.findOne({_id: id})

        return ret
    }catch(err){
        throw Error(err)
    }
}

async function update(id, wiki) {
    try{
        const ret = await WikiItem.findOneAndUpdate({
            _id: id}, wiki,{new: true})
         return ret
    }catch(err){
        throw Error(err)
    }
}

async function remove(id) {
    try{
        const ret = await WikiItem.remove({_id: id})

        if( ret.n === 0 && ret.ok === 1){
            throw Error("Could not be deleted")
        }

        return ret
    }catch(err){
        throw Error(err)
    }
}

module.exports = {
    list,
    create,
    read,
    update,
    remove
  }

