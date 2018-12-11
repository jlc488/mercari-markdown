import axios from 'axios'
import {
    observable
} from 'mobx'

export default class ListPresenter {
    wikiItemList = observable.mobx(
        [
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
    );

    wikiItem = observable.mobx({});

    getListCount() {
        return this.wikiItemList.length
    }

    async saveWikiItem(wikiItem) {
        this.wikiItem = {
            creator: 'sin',
            updater: 'sin',
            ...wikiItem
        }

        const ret = await axios.post('/api/wiki', wikiItem)

        return ret
    }

    async getWikiItemList() {
        const ret = await axios.get('/api/wiki')
        if (ret) {
            this.wikiItemList = ret.wikiItemlist
        }

        return this.wikiItemList
    }

    async getWikiItem(id) {
        const ret = await axios.get(`/api/${id}`)

        if (ret) {
            this.wikiItem = ret.wikiItem
        }

        return this.wikiItem
    }




}