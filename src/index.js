import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,FlatList } from 'react-native';

import Lista from '../src/Lista'

class App extends Component{

constructor(props){
    super(props);
    this.state={
        feed:[
            {
                id:'1',
                nome:'Gabriel',
                descricao:'Mais um dia de bugs',
                imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao:'https://sujeitoprogramador.com/instareact/foto1.png',
                likeada:false,
                likers:0
            },
            {
                id:'2',
                nome:'Luiz',
                descricao:'Mais um dia de bugs',
                imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao:'https://sujeitoprogramador.com/instareact/foto2.png',
                likeada:false,
                likers:0
            },
            {
                id:'3',
                nome:'João',
                descricao:'Mais um dia de bugs',
                imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                imgPublicacao:'https://sujeitoprogramador.com/instareact/foto3.png',
                likeada:false,
                likers:4
            },
            {
                id:'4',
                nome:'Marcos',
                descricao:'Mais um dia de bugs',
                imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao:'https://sujeitoprogramador.com/instareact/foto4.png',
                likeada:true,
                likers:1
            },
            {
                id:'5',
                nome:'Paulo',
                descricao:'Mais um dia de bugs',
                imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao:'https://sujeitoprogramador.com/instareact/foto5.png',
                likeada:false,
                likers:8
            },
        ]
    };
}


  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require("../src/img/logo.png")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../src/img/send.png")} style={styles.send}/>
            </TouchableOpacity>
        </View>
        
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        data={this.state.feed}
        renderItem={ ({item}) => <Lista data={item} /> }
        />
      </View>
    )
  }
  
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height:55,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5,

    borderBottomWidth:0.2,
    shadowColor:'#000',
    elevation:1
  },
  logo:{

  },
  send:{
      width:23,
      height:23
  }
});
