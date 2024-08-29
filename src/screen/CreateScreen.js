import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogProvider'
import { TextInput } from 'react-native-gesture-handler'

function CreateScreen() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
 
  return (
    <View style={styles.view}>
        <Text style={styles.Enter}>Enter Title : </Text>
        <TextInput autoCapitalize={false} style={styles.input} value={title} onChangeText={text => setTitle(text)} />

        <Text  style={styles.Enter}>Enter Content :</Text>
        <TextInput autoCapitalize={false} style={styles.input} value={content} onChangeText={text => setContent(text)}/>

        <Button title='Add Blog Post'/>
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
        borderColor: 'gray'

    }
})

export default CreateScreen