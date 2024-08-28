import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Context} from '../context/BlogProvider'

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
function index() {
    const {state, addBlogPost , deleteBlogPost} = useContext(Context)
  return (
    <View>
        
        <Button title=" Add Post " onPress={addBlogPost} />

       <FlatList 
        data={state}
        keyExtractor={(blogpost)=> blogpost.title }
        renderItem={({item})=> {

            return <View style={styles.row}>
              <Text style={styles.text}>{item.title}</Text>
              <Text>{item.id}</Text>

              <TouchableOpacity onPress={() =>deleteBlogPost( item.id)}>
              <FontAwesome6 style={styles.trash} name="trash" />
              </TouchableOpacity>
              </View>
        }
        
        }
       />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontWeight : 'bold',
        color: 'orange',
        fontSize: 20
        
        
    },
    row : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      alignItems: 'center',
      paddingVertical: 6,
      borderTopWidth: 1,
      borderColor: 'grey'
    },
    trash: {
      fontSize: 16
    }

})

export default index