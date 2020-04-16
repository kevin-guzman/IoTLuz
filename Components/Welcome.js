import React, {Component} from 'react'
import { Icon } from 'react-native-elements' 
import {View,
   Text, 
   StyleSheet, 
   TouchableOpacity,
   TextInput,
   Button
} from 'react-native'

class Welcome extends Component{

  constructor(props){
    super(props)
    this.state={
      sh:'Smart House App',
      UserName:'',
      Password:'',
      bienvenido:'¡Bienvenido!'
    }
  }

  inicio = () => {
    this.props.navigation.navigate('Lista')
  }

    render(){

      const{sh}=this.state
      const{bienvenido}=this.state
      let {UserName}=this.state
      let {Password}=this.state


      return(
        <View style={Styles.container}>


          <View style = {Styles.header}>
            <Text style= {Styles.paragraph}> 
              Bienvenido a SmartHouse App
            </Text>
            <Text style={Styles.paragraph2}>
              Es hora de que registres tu usuario
            </Text>
          </View>


          <View style={Styles.login}>
              <View style={Styles.icnonInput}>
                <Icon name='person'  />
                <TextInput 
                  style={Styles.textin} placeholder={"Nombre de usuario"} 
                  onChangeText={(UserName) => this.setState({UserName})}
                  maxLength={18} 
                />
              </View>

              <View style={Styles.icnonInput}>
                <Icon name='security'  />
                <TextInput 
                  style={Styles.textin} 
                  placeholder={"      Contraseña       "}
                  onChangeText={(Password) => this.setState({Password})}
                />
              </View>
          </View>


          <View style={{alignItems:'center',paddingVertical:'2%'}}>
            <Text>
              Bienvenido {UserName}
            </Text>
          </View>


          <View style={Styles.buttonS} >
            <Button title={"Entrar"} />
          </View>


        </View>
      )
    }
}
const Styles = StyleSheet.create({

  container :{
    flex : 1,
    backgroundColor : '#E4F2F8',
    paddingVertical:'10%',
  },

  header: {
    flex: 1.2,
    paddingVertical:'10%',
    alignItems : 'center',
    justifyContent: 'space-between',
    flexDirection:'column',
    
  },

  paragraph :{
    fontSize : 33,
    //color : 'black',
    textAlign : 'center',
    color: 'rgb(20,10,50)',
   },

   paragraph2:{
     fontSize: 13,
     marginVertical:'1.5%',
     textAlign:'center',
     color:'rgba(150,90,255,0.9)'
   },


  button: {
    borderWidth : 0.5,
    borderColor: '#626AE5',
    width: 234,
    height: 57,
    backgroundColor: 'white',
    borderRadius: 21,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 23,
  },

  textin:{
    fontSize:15,
    alignSelf:'flex-start',
    paddingVertical:'1%',
  },

  icnonInput:{
    flexDirection:'row',
    padding:'2%',
    alignSelf:'center',
    //borderWidth:0.35,
    //borderColor:'gray',
    
  },

  login:{
    marginVertical:'20%',
    marginHorizontal:'10%',
    flex:1.1,
    alignItems:'center',
    flexDirection:'column',
  },

  buttonS:{
    paddingVertical:'8%',
    paddingHorizontal:'17%',
    flex:1,
    alignContent:'center'
  },
  
})
export default Welcome