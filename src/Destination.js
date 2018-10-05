import React, {Component} from 'react'
import {View, Image, ScrollView} from 'react-native'

class Destination extends Component{
    constructor(props){
        super(props)

        this.state = {
            dataDestination = [
                {

                }
            ]
        }
    }
    render(){
        return(
            <ScrollView style={{flex:1, flexDirection:"row"}} contentContainerStyle={{alignItems:"center"}} horizontal>
                {this.state.dataDestination.map((data, idx)=> (
                    <View>
                        <Image source={{uri: data.image}} style={{ width: 150, height:150, borderRadius:8, margin: 10}}></Image>
                    </View>
                ))}
            </ScrollView>
        )
    }
}

//api = http://172.104.50.9:3000/api/destination_lists
export default Destination