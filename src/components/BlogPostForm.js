import React, { useState } from 'react'
import { Button, StyleSheet, View,Text , TextInput } from 'react-native'

function BlogPostForm({onSubmit, initialValues = { title: "", content: "" }}) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content)
    return (
        <View style={styles.view}>
            <Text style={styles.Enter}>Enter Title : </Text>
            <TextInput autoCapitalize={false} style={styles.input} value={title} onChangeText={text => setTitle(text)} />
    
            <Text  style={styles.Enter}>Enter Content :</Text>
            <TextInput autoCapitalize={false} style={styles.input} value={content} onChangeText={text => setContent(text)}/>
    
            <Button title='Save Blog Post' onPress={()=> onSubmit(title, content)} />
        </View>
      )
}

const styles = StyleSheet.create({
    view : {
        margin: 20
    },
    Enter : {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30
    },

    input : {
        borderWidth: 1,
        height: 40,
        margin: 20,
        borderRadius: 6,
        borderColor: 'gray',
        paddingLeft: 5

    }
})

export default BlogPostForm