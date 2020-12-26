import React,{Component} from 'react'
import {Text,View,TouchableOpacity,StyleSheet,Image, TouchableHighlight} from 'react-native';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state={
            feed:this.props.data
        }
        this.carregarIcone = this.carregarIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }

    carregarIcone(likeada){
        return likeada === true ? require('../../src/img/likeada.png') : require('../../src/img/like.png')
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada:false,
                    likers:feed.likers - 1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada:true,
                    likers:feed.likers + 1
                }
            })
        }
    }

    mostraLikes(Likers){
        let feed = this.state.feed;

        if(feed.likers <=0){
            return;
        }
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1  ? " Curtidas" : " Curtida"}
            </Text>
        )
    }

    render(){
        return(
            <View style={styles.areaFeed}>

                <View style={styles.viewPerfil}>
                    <Image source={{uri:this.state.feed.imgperfil}} style={styles.fotoPerfil}/>
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image
                resizeMode="cover"
                source={{uri:this.state.feed.imgPublicacao}} 
                style={styles.fotoPublicacao}/>

                <View style={styles.areabtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                        source={this.carregarIcone(this.state.feed.likeada)}
                        style={styles.iconelike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnsend}>
                        <Image 
                        source={require('../../src/img/send.png')}
                        style={styles.iconelike}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize:22,
        textAlign:'left',
        color:'#000000',
        paddingLeft:4
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius:25
    },
    fotoPublicacao:{
        flex:1,
        height:400,
        alignItems:'center'
    },
    viewPerfil:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        padding:8
    },
    areabtn:{
        flexDirection:'row',
        padding:5
    },
    iconelike:{
        width:25,
        height:25
    },
    btnsend:{
        paddingLeft:5
    },
    viewRodape:{
        flexDirection:'row',
        alignItems:'center'
    },
    descRodape:{
        paddingLeft:5,
        fontSize:15,
        color:'#000'
    },
    nomeRodape:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        paddingLeft:5
    },
    likes:{
        fontWeight:'bold',
        marginLeft:5
    }
})
export default Lista;