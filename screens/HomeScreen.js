import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";


export default function HomeScreen() {
  return (
    <SafeAreaView style={tw `bg-white`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw `flex-row items-center space-x-2 px-4 pb-2`}>
        <View style={tw `flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" style={tw `ml-2 flex-1`}/>
          <View style={tw `flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300`}>
            <Icon.MapPin height="20" width="20" stroke="gray"/>
            <Text style={tw `text-gray-600`}>Toronto</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

