import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {bgColor, secondColor} from '../../constants/colors';

const RoundedInput = props => {
  const [isFocused, setIsFocused] = useState(false);
  const renderlabel = () => {
    const {label} = props;

    return (
      <Text
        style={{
          fontSize: 14,
          top: 9,
          zIndex: 1,
          marginHorizontal: 5,
          paddingHorizontal: 5,
          alignSelf: 'flex-start',
          color: isFocused ? secondColor : '#141823',
          backgroundColor: bgColor,
        }}>
        {label}
      </Text>
    );
  };

  return (
    <View
      style={{
        alignSelf: 'stretch',
      }}>
      {renderlabel()}

      <TextInput
        {...props}
        style={{
          borderWidth: 0.5,
          paddingHorizontal: 10,
          paddingVertical: 8,
          width: '100%',
          fontSize: 16,
          borderColor: isFocused ? secondColor : null,
          borderRadius: 10,
          textAlign: 'left',
        }}
        placeholder={`Please Enter ${props.label}`}
        underlineColorAndroid="transparent"
        selectionColor={secondColor}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </View>
  );
};

export default RoundedInput;
