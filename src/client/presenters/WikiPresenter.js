import axios from 'axios'
import { observable, action, computed, runInAction  } from 'mobx'
import _ from 'lodash'

class WikiPresenter {
    constructor(){}

    @observable wikiItemList = []

    @observable wikiItem = {}

    @computed
    get listCount() {
        return this.wikiItemList.length
    }

    @action
    async saveWikiItem(wikiItem) {
        console.log('saveWikiItem')

        this.wikiItem = {
            creator: 'sin',
            updater: 'sin',
            ...wikiItem
        }

        this.wikiItemList.push(this.wikiItem)

        const ret = await axios.post('/api/wiki', wikiItem)
        console.log('presenter')
        console.log(ret)
        return ret
    }

    @action
    async updateWikiItem(wikiItem) {
        console.log('updateWikiItem')

        this.wikiItem = {
            creator: 'sin',
            updater: 'sin',
            ...wikiItem
        }

        _.find(this.wikiItemList, e => {
            if( e._id === wikiItem._id){
                e.title = wikiItem.title
                e.contents = wikiItem.contents
                return e
            }
        })

        const ret = await axios.put(`/api/wiki/${wikiItem._id}`, wikiItem)
        console.log('presenter')
        console.log(ret)
        return ret
    }

    @action
    async loadWikiItemList() {
        try{

            const ret = await axios.get('/api/wiki')
            if (ret) {
                runInAction(() =>{
                    this.wikiItemList = ret.data
                })
            }
            return this.wikiItemList
        }catch(e){
            console.log(e)
        }
    }

    @action
    async loadWikiItem(id) {
        try{

            const ret = await axios.get(`/api/wiki/${id}`)
            console.log(ret)
            if (ret) {
                runInAction(() =>{
                    this.wikiItem = ret.data
                    console.log('loadWikiItem')
                    console.log(this.wikiItem)
                })
            }
            return this.wikiItem
        }catch(e){
            console.log(e)
        }
    }
}

const singleton = new WikiPresenter()

export default singleton
