import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


//make a variable
export const store = configureStore({
    reducer:todoReducer
})