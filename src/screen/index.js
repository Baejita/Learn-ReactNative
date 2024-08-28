import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import BlogContext from '../context/BlogProvider'

function index() {
    const {data, addBlogPost} = useContext(BlogContext)
  return (
    <View>
        <Text style={styles.text}> Index page </Text>
        <Button title=" Add Post " onPress={addBlogPost} />
       <FlatList 
        data={data}
        keyExtractor={(blogpost)=> blogpost.title }
        renderItem={({item})=> {
            return <Text>{item.title}</Text>
        }
        
        }
       />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontWeight : 'bold',
        color: 'orange'
        
    }
})

export default index