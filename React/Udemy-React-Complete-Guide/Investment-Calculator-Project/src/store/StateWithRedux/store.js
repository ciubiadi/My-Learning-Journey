import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorSlice.js'

export default configureStore({
  reducer: {
    counter: calculatorReducer,
  },
})