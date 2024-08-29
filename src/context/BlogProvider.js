import createDataContext from './createDataContext';


const blogPostReducer = (state, action) =>{
    switch (action.type) {

        case 'delete_blockPost':
        return state.filter(blogpost => blogpost.id !== action.payload)

        case 'add_blockPost' :
        return [...state, {id: Math.floor(Math.random()* 9999), 
            title: action.payload.title,
            content: action.payload.content
        }]
        
        default :
        return state;
    }

}

const addBlogPost = dispatch => { 
    return (title, content, callback)=> {
        dispatch({type : 'add_blockPost', payload: { title, content}})
        callback();
    }
}

const deleteBlogPost = dispatch => {
    return (id)=> {
        dispatch({type: 'delete_blockPost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(blogPostReducer, {addBlogPost, deleteBlogPost}, [])