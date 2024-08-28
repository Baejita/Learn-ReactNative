import React, { useReducer, useState } from 'react'

const BlogContext = React.createContext();

const blogPostReducer = (state, action) =>{
    switch (action.type) {
        case 'add_blockPost' :
        return [...state, {title: `Blog Post #${state.length + 1}`}]
        default :
        return state;
    }

}

export const BlogProvider = ({children})=> {
    const [blogPost , dispatch] = useReducer(blogPostReducer,[]);

    const addBlogPost = () => { 
        dispatch({type : 'add_blockPost'})
    }
    


    return <BlogContext.Provider value = {{ data: blogPost,addBlogPost} }>
    {children}
    </BlogContext.Provider>
}

export default BlogContext;