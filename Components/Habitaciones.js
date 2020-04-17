import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList,
  Slider,
  Button
} from 'react-native'

import style from './Styles'
import DATA from './data/data.json'

/*
constructor(props) {
  super(props);
  this.state = {
    value: 50,
  };
}

change(value) {
  this.setState(() => {
    return {
      value: parseFloat(value),
    };
  });
}
*/

//const {value} = this.state;

function Item({ title }) {

  return (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text> 
      <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
        step={1}
        maximumValue={100}
        //onValueChange={this.change.bind(this)}
        value={30}
      />
      <Button style={{height:0.1, marginTop:2,padding:'2%'}} title={"Off"}  />
        
      
    </View>
  );
}


//global: value


class Habitaciones extends Component{
  agregar = () =>{
    this.props.navigation.navigate('Form')
  }

  cancelar = () =>{
    this.props.navigation.navigate('Welcome')
  }





    render(){
      

      return(
        <View style={Styles.container}>


          <View style = {Styles.header}>
            <Text style= {Styles.paragraph}> 
              Añade los cuartos que posees y los cuales quieres controlar. 
              Datos:
            </Text>
          </View>
          <View style={Styles.containerr}>

            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />

          </View>
          <View style = {Styles.footer}>    
            
    
          </View>
          



        </View>



      )

    }
}
const Styles = StyleSheet.create({

  containerr: {
    flex: 5,
    marginHorizontal:'5%',
    marginTop: Constants.statusBarHeight,
  },


  container :{
    flex : 1,
    backgroundColor : 'white'
  },


  header: {
    flex: 1.2,
    alignItems : 'center',
    justifyContent: 'flex-end'
  },


  paragraph :{
    fontSize : 18,
    color : 'black',
    textAlign : 'center',
   },


  footer:{
    flex: 0.3,
    paddingVertical:'3%',
    margin: 1,
    justifyContent: 'space-around',
    flexDirection : 'row',
    alignItems: 'flex-end',
    marginBottom: 5
  },
  
})
export default Habitaciones