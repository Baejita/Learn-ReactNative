import React from 'react'
import createDataContext from './createDataContext';


const blogPostReducer = (state, action) =>{
    switch (action.type) {

        case 'delete_blockPost':
        return state.filter(blogpost => blogpost.id !== action.payload)

        case 'add_blockPost' :
        return [...state, {id: Math.floor(Math.random()* 9999), title: `Blog Post #${state.length + 1}`}]
        
        default :
        return state;
    }

}

const addBlogPost = dispatch => { 
    return ()=> {
        dispatch({type : 'add_blockPost'})
    }
}

const deleteBlogPost = dispatch => {
    return (id)=> {
        dispatch({type: 'delete_blockPost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(blogPostReducer, {addBlogPost, deleteBlogPost}, [])