import React from 'react'
import { TextInput, View } from 'react-native'

const Input = ({ label }) => {
  return (
    <View>
       <Text>{label}</Text>
       <View style={st}>

       <TextInput></TextInput>
       </View>
    </View>
  )
}