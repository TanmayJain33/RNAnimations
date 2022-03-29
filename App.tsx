import React, {useState} from 'react';
import {View, TouchableOpacity, Animated, Text} from 'react-native';

export default function App() {
  const value = new Animated.ValueXY({x: 0, y: 0});

  function moveSquare() {
    Animated.timing(value, {
      toValue: {x: 300, y: 500},
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }

  const color = value.y.interpolate({
    inputRange: [0, 100, 200, 300, 400, 500],
    outputRange: ['red', 'blue', 'green', 'green', 'blue', 'red'],
  });

  const rotate = value.x.interpolate({
    inputRange: [0, 200],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={moveSquare}>
        <Animated.View
          style={[
            {
              backgroundColor: color,
              width: 100,
              height: 100,
              transform: [
                {translateX: value.x},
                {translateY: value.y},
                {rotate: rotate},
              ],
            },
          ]}></Animated.View>
      </TouchableOpacity>
    </View>
  );
}
