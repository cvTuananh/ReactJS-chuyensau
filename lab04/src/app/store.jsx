import {configureStore} from '@reduxjs/toolkit'

import potsReducer from '../components/post/postSlice'

export default configureStore ({
    reducer: {
        posts:potsReducer
    }
})