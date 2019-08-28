// import React from 'react';
// import { Button } from 'react-native';


// function HomeScreen(props) {
//     return (
//         <Button title="Greet" onPress={() => props.greetHandler()} />
//     )
// }


// export default HomeScreen

import React from 'react';
import { Button, View, Text, FlatList, StyleSheet, Alert, ActivityIndicator  } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
      };
    
      renderFooter = () => {

        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };
    
    //handling onPress action  
    getListViewItem = (item) => {
        alert(item.key);
    }

    render() {
        return (
            <View >
                <Button title="Greet" onPress={() => this.props.greetHandler()} />

                <FlatList
                    data={this.props.languageList}
                    renderItem={({ item }) =>
                        <Text 
                            style={styles.item}
                            onPress={this.getListViewItem.bind(this, item)}>
                            {item.key}
                        </Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => item.key}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})  
