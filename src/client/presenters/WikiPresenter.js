import axios from 'axios'
import { observable, action, computed, runInAction  } from 'mobx'

class WikiPresenter {
    constructor(){}

    @observable wikiItemList = [
            {
                _id: '1',
                content:'test1'
            },
            {
                _id: '2',
                content:'test2'
            },
            {
                _id: '3',
                content:'test3'
            },
            {
                _id: '4',
                content:'test4'
            },
            {
                _id: '5',
                content:'test5'
            }
        ]

    @observable wikiItem = {}

    @computed
    get listCount() {
        return this.wikiItemList.length
    }

    @action
    async saveWikiItem(wikiItem) {
        this.wikiItem = {
            creator: 'sin',
            updater: 'sin',
            ...wikiItem
        }

        this.wikiItemList.push(this.wikiItem)

        const ret = await axios.post('/api/wiki', wikiItem)

        return ret
    }

    @action
    async getWikiItemList() {
        try{

            const ret = await axios.get('/api/wiki')
            if (ret) {
                runInAction(() =>{
                    this.wikiItemList = ret.wikiItemList
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    @action
    async getWikiItem(id) {
        try{

            const ret = await axios.get(`/api/${id}`)

            if (ret) {
                runInAction(() =>{
                    this.wikiItem = ret.wikiItem
                })
            }
        }catch(e){
            console.log(e)
        }
    }
}

const singleton = new WikiPresenter()

export default singleton