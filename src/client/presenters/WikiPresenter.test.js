import WikiPresenter from './WikiPresenter'

test('wikiItemList is not empty', () =>{
    const wikiItemList = WikiPresenter.wikiItemList

    wikiItemList.push({
        _id: 'test_id',
        contents: 'test'
    })
    expect(wikiItemList.length).toBe(1)
})

// test('wikiItem is not empty', () =>{
//     const wiki = WikiPresenter.wikiItem

//     expect(wiki.length).toBe(1)

// })