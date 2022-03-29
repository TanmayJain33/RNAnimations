import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  PanResponder,
} from 'react-native';

export default function App() {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            borderRadius: 50,
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}></Animated.View>
    </View>
  );
}
