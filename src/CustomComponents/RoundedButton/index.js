import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {bgColor, secondColor} from '../../constants/colors';

const RoundedButton = props => {
  const {title, loading = false, onPress} = props;

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
