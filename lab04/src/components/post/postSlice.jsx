import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id:1, title: 'first post', content:'Hello'},
    {id:2, title: 'second post', content:'welcome to Redux'},
    {id:3, title: 'third post',content:'hello evverybody'},
    {id:4, title: 'for post',content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora suscipit, modi voluptates pariatur dolorem mollitia veniam excepturi quod id esse quae molestiae iusto error non vero, provident aut beatae.'}
]
const postSlice = createSlice({
    name: 'pots',
    initialState,
    reducers:{}
})

export default postSlice.reducer;