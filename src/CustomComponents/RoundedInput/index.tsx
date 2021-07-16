import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import { secondColor} from '../../constants/colors';
import styles from './styles';

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
        style={styles.label(isFocused)}>
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
        style={styles.textInput(isFocused)}
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
