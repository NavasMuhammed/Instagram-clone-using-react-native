import { View, Text, StyleSheet, Image,T } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../../assets/instagram.png')}>

                </Image>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image 
                    style={styles.icon}
                    source={{ uri:'https://cdn-icons.flaticon.com/png/512/3161/premium/3161837.png?token=exp=1645655919~hmac=76a162c47ed9af2d37e325a364c8b6d3'
                    }}>

                    </Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadbadge}>
                        <Text style={styles.unreadbadgetext}>
                            11
                        </Text>
                    </View>
                    <Image 
                    style={styles.icon}
                    source={{ uri:'https://cdn-icons-png.flaticon.com/512/1384/1384090.png'
                    }}>

                    </Image>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:100,
        width:375,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal:20,
    },
    iconContainer:{
        flexDirection:'row',
    },

    logo: {

        width: 150,
        height:100,
        resizeMode: 'contain',
        marginBottom:-20,

    },
    icon:{
        marginTop:20,
        height:30,
        width:30,
        marginLeft:10,
        left:-13,
        resizeMode: 'contain',
        
        

    },
    unreadbadge:{
        position: 'absolute',
        width:25,
        left:14,
        bottom:18,
        height:18,
        borderRadius:25,
        backgroundColor:'#FF3250',
        alignItems:'center',
        justifyContent: 'center',
        zIndex:10,
        
        
    },
    unreadbadgetext:{
        fontWeight:'bold',
        color:'white',
        

    },

})


export default Header