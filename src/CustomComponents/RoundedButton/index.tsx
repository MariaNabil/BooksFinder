import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {bgColor, secondColor} from '../../constants/colors.js';

type Props = {
   onPress(): void,
   title: string,
   loading:boolean
}
const RoundedButton= ({title, loading = false, onPress}:Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 12,
          borderRadius: 10,
          backgroundColor: secondColor,
          width: '100%',
          marginVertical: 10,
        },
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={bgColor} />
      ) : (
        <Text style={{color: 'white'}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default RoundedButton;
