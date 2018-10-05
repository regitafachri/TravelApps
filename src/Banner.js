import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import axios from "axios";

class Banner extends Component {
  

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper showsButtons loop autoplay showsPagination={true}>
          {this.props.data.map((dataObj, idx) => (
            <View style={styles.slide1}>
              <Image
                source={{ uri: dataObj.image }}
                resizeMode="contain"
                style={{ width: "150%", height: "150%" }}
              />
              <Text style={styles.Text}>{dataObj.name}</Text>
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  Text: {
    color: "white",
    fontSize: 30,
    position: "absolute",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
    return{
        data : state.getData.item,
        isfetching: state.getData.isFetching
    }
}


export default connect(mapStateToProps)(Banner)
