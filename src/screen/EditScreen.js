import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogProvider';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen({navigation}) {
    const id = navigation.getParam('id')

    const {state,editBlogPost} =useContext(Context)

    //ตรวจสอบว่า ค่า id ของ state ตรงกับ navigation
    const blogPost = state.find((blogPost) => blogPost.id === id )

    
 
  return <BlogPostForm
            initialValues ={{title: blogPost.title, content : blogPost.content}}
            onSubmit={(title, content)=> editBlogPost(id, title, content, ()=> navigation.pop())}
  />
}

const styles = StyleSheet.create({
})

export default EditScreen