import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {bgColor, mainColor, secondColor} from '../../constants/colors';

type Props = {
  label: string,
  value: string,
  onChangeText: void
}
const RoundedInput = ( {label,value,onChangeText} : Props ) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const renderlabel = () => {

    return (
      <Text
        style={{
          fontSize: 14,
          top: 9,
          zIndex: 1,
          marginHorizontal: 5,
          paddingHorizontal: 5,
          alignSelf: 'flex-start',
          color: isFocused ? secondColor : mainColor,
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
        placeholder={`Please Enter ${label}`}
        underlineColorAndroid="transparent"
        selectionColor={secondColor}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default RoundedInput;
