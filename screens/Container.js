import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default class Container extends React.Component {
  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const biggerThanScreen = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar 
          // barStyle="light-content"
        />
        <ScrollView
          style={{ flex: 1 }}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={true} // biggerThanScreen
          onContentSizeChange={this.onContentSizeChange} // get the most up-to-date screen height
          bounces={true}
        >
          <View style={styles.content}>
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C1D32F",
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    // padding: 10,
  },
});