import React from 'react';
import {FlatList, Text} from 'react-native';
import BookItem from './BookItem';
import styles from './styles';

const BookList = props => {
  const {books} = props;

  const renderBookListHeader = () => (
    <Text style={styles.bookListHeader}>{'Found Books :'}</Text>
  );

  return (
    <FlatList
      ListHeaderComponent={books && books.length ? renderBookListHeader : null}
      data={books}
      keyExtractor={(item, index) => `${index}`}
      renderItem={item => <BookItem item={item} />}
      style={styles.bookList}></FlatList>
  );
};

export default BookList;
