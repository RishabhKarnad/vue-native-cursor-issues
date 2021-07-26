import React, { Component, useState } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'

export class Something extends Component {
  state = {
    x: '',
  }

  setX = (v) => {
    this.setState(x => ({ x: v }))
  }

  render() {
    const { x } = this.state
    return <View><TextInput value={x} onChangeText={this.setX} /></ View>
  }
}

export default class App extends Component {
  state = { x: ' ' }

  y = ''

  update = (x) => {
    this.y = x
    this.forceUpdate()
  }

  render() {
    const { x } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello</Text>
        <Text>{this.y}</Text>
        <TextInput value={x} onChange={(e) => this.setState({ x: e.nativeEvent.text })} />
        <TextInput value={this.y} onChange={(e) => this.update(e.nativeEvent.text)} />
      </View>
    )
  }
}
