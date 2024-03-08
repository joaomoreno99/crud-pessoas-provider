import React, {useState} from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';


export default function(){

  const [visivel, setVisivel]=useState(false)
 return(
        <View>
          <Modal
                animationType="fade"
                transparent={true}
                visible={visivel}

          >
            <View style={estilos.modal}>
                  <Text style={estilos.textoModal}>Lorem ipsum dolor sit amet.
                   Nam asperiores quam et sint soluta a quos quos aut facere
                   nulla non nostrum minus in officiis magni sit adipisci delectus.
                    Qui quibusdam alias id minus dolorem ut sint voluptas quo facilis
                     consequatur! Est galisum amet sit fugiat minima At cumque optio
                      et iusto architecto et deleniti omnis eum voluptatem rerum non
                       tempora nesciunt.</Text>
                  <View style={estilos.fixToRight}>
                  <Button
                    title="Fechar"
                    onPress={()=>{setVisivel(false)}}
                  />
                  </View>
            </View>
          </Modal>
            <View style={estilos.fixToRight}>
              <Button
                      title="Mais sobre"
                      onPress={()=>{setVisivel(true)}}
              />
            </View>
        </View> 
 )
}
  const estilos = StyleSheet.create({
    modal:{
        backgroundColor: "#000",
        margin:20,
        padding:20,
        borderRadius:20,
        elevation:10
    },
    textoModal:{
        color:"#fff"
    },
    fixToRight: {
    alignItems: 'flex-end',
    }
  })
