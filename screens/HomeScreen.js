import { View, Text, StyleSheet, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs,{bottomTabIcons} from '../components/home/BottomTabs'


import { POST } from '../data/posts'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      
      <ScrollView>

        {POST.map((post,index)=>(
          <Post post={post} key={index}/>
          ))}
          
      
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'black',
    flex: 1,

  }
})

export default HomeScreen