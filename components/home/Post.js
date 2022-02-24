import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        iconName: 'like',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
        clickedImageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png'
    },
    {
        iconName: 'comment',
        imageUrl: 'https://cdn-icons.flaticon.com/png/512/3031/premium/3031126.png?token=exp=1645656025~hmac=1d010c6f88abdeffddf5410c4c0c4a4b',

    },
    {
        iconName: 'share',
        imageUrl: 'https://cdn-icons.flaticon.com/png/512/2099/premium/2099085.png?token=exp=1645655919~hmac=25a6f6398f2b914fc750e769629d617f',

    },
    {
        iconName: 'save',
        imageUrl: 'https://cdn-icons.flaticon.com/png/512/3082/premium/3082331.png?token=exp=1645656399~hmac=f9d7f951ddca224e63ae0ad945ee25de',
        clickedImageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-bookmark-instagram-flatart-icons-outline-flatarticons.png'

    }
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30, display: 'flex' }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>

                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Commets post={post}/>
            </View>

        </View>
    )
}
const PostHeader = ({ post }) => (
    <View
        style={{

            flexdirection: 'colum',
            justifyContent: 'space-between',
            margin: 0,

            // alignItems: 'center',
            justifyContent: 'center'


        }}
    >
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{
                // marginBottom:0,
                color: 'white',
                marginLeft: 5,
                fontWeight: 'bold',
            }}> {post.user}
            </Text>
        </View>
        <Text style={{
            color: 'white',
            fontWeight: 'bold',
            left: 380,
            marginTop: -34,

        }}>...</Text>
    </View>

)
const PostImage = ({ post }) => (
    <View >
        <Image source={{ uri: post.imageurl }}
            style={
                {
                    height: 350,
                    resizeMode: 'cover',
                    marginTop: 20,


                }
            } />

    </View>
)
const PostFooter = () => (
    <View style={{ flexDirection: 'row', }}>
        <View style={styles.leftFooterContainer}>

            <Icon imgstyle={styles.footIcon}
                imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgstyle={styles.footIcon}
                imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgstyle={styles.footIcon}
                imgUrl={postFooterIcons[2].imageUrl} />

        </View>
        <View style={{ alignItems: 'flex-end', flex: 1, }}>
            <Icon imgstyle={styles.footIcon}
                imgUrl={postFooterIcons[3].imageUrl} />
        </View>


    </View>

)
const Icon = ({ imgstyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgstyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>


)
const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4, }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)
const Caption = ({ post }) => (
    <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: '700' }}>{post.user}</Text>
        <Text>{post.caption}</Text>
    </Text>
)
const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View {post.comments.length > 1 ? 'all' : ' '} {post.comments.length} {''}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)
const Commets=({ post })=>(
    <View >
        {post.comments.map((comment,index)=>(
        <View key={index} style={{marginTop:5,}}>
            <Text style={{ color: 'white',}}>
                <Text style={{fontWeight:'700',}}>
                {comment.user}
                </Text>{' '}
                
                {comment.comment}

            </Text>
        </View>    
        
        ))}
    </View>
)
const styles = StyleSheet.create({
    story: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginLeft: 12,
        borderWidth: 1.5,
        borderColor: '#ff8501',
        marginTop: 8,
        alignItems: 'center',

    },

    footIcon: {
        width: 27,
        height: 27,

    },
    leftFooterContainer: {
        flexDirection: 'row',
        width: '32%',

        justifyContent: 'space-between',
        left: -6,
    }

})

export default Post