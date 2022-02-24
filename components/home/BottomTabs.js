import { View, Text,Divider,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

export const bottomTabIcons=[
    {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/344/ffffff/home.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/344/ffffff/home.png',
    },
    {
    name: 'Search',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/search.png',
    inactive: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/search.png',
    },
    {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/344/ffffff/instagram-reel.png',
    },
    {
    name: 'Like',
    active: 'https://img.icons8.com/fluency-systems-filled/344/ffffff/filled-like.png',
    inactive: 'https://img.icons8.com/fluency-systems-filled/344/ffffff/hearts.png',
    },
    {
    name: 'Profile',
    active: 'https://64.media.tumblr.com/580c5baef5cf5f913d4dea27d77406ba/a427c70ac8da6e3e-b6/s400x600/f10e871e0a208fe00b570a5aba526e7b3bdae8db.jpg',
    inactive: 'https://64.media.tumblr.com/580c5baef5cf5f913d4dea27d77406ba/a427c70ac8da6e3e-b6/s400x600/f10e871e0a208fe00b570a5aba526e7b3bdae8db.jpg',
    },

]
const BottomTabs = ({icons}) => {

    const [activeTab,setActiveTab]=useState('Home')

    const Icon=({icon})=>(
        <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
            <Image source={{uri: icon.inactive}}
            style={styles.icon}
            />

        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
      {icons.map((icons,index)=>
      <Icon key={index} icon={icons}/>)}
    </View>
  )
}
const styles=StyleSheet.create ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingTop:2,
    alignItems: 'center',
    height:50,


  },
  icon:{
    width: 27,
    height:27,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})

export default BottomTabs