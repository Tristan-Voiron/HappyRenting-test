import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import MultiSelect from 'expo-multiple-select';

const cities = [
  { id: 1, name: 'New York', country: 'United States' },
  { id: 2, name: 'London', country: 'England' },
  { id: 3, name: 'Berlin', country: 'Germany' },
  { id: 4, name: 'Paris', country: 'France' },
  { id: 5, name: 'Madrid', country: 'Spain' },
  { id: 6, name: 'Rome', country: 'Italy' },
  { id: 7, name: 'Brussels', country: 'Belgium' },
  { id: 8, name: 'Lisbonne', country: 'Portugal' }
]

export default class App extends Component {
  state = {
    selectedItems : [],
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />

        <MultiSelect
          hideTags
          items={cities}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />

        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => console.warn(item.name)}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textCountry}>{item.country}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  item: {
    marginVertical: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textCountry: {
    fontSize: 14,
  }
});
