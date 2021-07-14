import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {bgColor, mainColor} from '../../constants/colors';
import {
  largeFontSize,
  smallFontSize,
  smallPadding,
} from '../../constants/styles';

const Details = props => {
  const item = props.route?.params?.item;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: smallPadding,
        flex: 1,
        backgroundColor: bgColor,
      }}>
      <StatusBar backgroundColor={mainColor} translucent={false} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: largeFontSize,
          alignSelf: 'center',
          paddingVertical: smallPadding,
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: smallFontSize,
          paddingVertical: smallPadding,
        }}>
        {`Published By : ${item.publishers.join(' and ')}`}
      </Text>
      <Text
        style={{
          fontSize: smallFontSize,
          paddingVertical: smallPadding,
        }}>
        {`Published At : ${item.publish_date}`}
      </Text>
      <Text
        style={{
          fontSize: smallFontSize,
          paddingVertical: smallPadding,
        }}>
        {`Number Of Pages : ${item.number_of_pages}`}
      </Text>
    </View>
  );
};
export default Details;
