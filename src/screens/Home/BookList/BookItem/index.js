import React from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const BookItem = props => {
  const {
    item: {item},
  } = props;
  const {title} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('Details', {item: item})}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default BookItem;
