import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {bgColor} from '../../constants/colors.js';
import useWindowsWidth from '../../CustomHooks/useWindowsWidth.js';
import styles from './styles.js';

type Props = {
   onPress(): void,
   title: string,
   loading:boolean
}
const RoundedButton= ({title, loading = false, onPress}:Props) => {
    const onSmallScreen = useWindowsWidth();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root,{width:onSmallScreen?"100%":"28%"}]}>
      {loading ? (
        <ActivityIndicator size="small" color={bgColor} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default RoundedButton;
