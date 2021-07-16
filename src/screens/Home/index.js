import React, {useEffect} from 'react';
import {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {bgColor, mainColor} from '../../constants/colors';
import RoundedButton from '../../CustomComponents/RoundedButton';
import RoundedInput from '../../CustomComponents/RoundedInput';
import {GetBookByISBN} from '../../Services/BookServices';
import Toast from 'react-native-simple-toast';

import BookList from './BookList';

const Home = () => {
  const [searchFor, setSearchFor] = useState('');
  const [books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(false);
  let cancelFetchData;

  useEffect(() => {
    //cancel request
    return () => cancelFetchData && cancelFetchData();
  }, []);

  const fetchBook = () => {
    setLoading(true);
    cancelFetchData = GetBookByISBN(
      searchFor,
      res => {
        setBooks([...books, res.data]);
        setLoading(false);
        setSearchFor('');
      },
      error => {
        setLoading(false);
        if (error.status == 404)
          Toast.show('This ISBN is not found', Toast.LONG);
      },
    );
  };

  const renderISBNInput = () => {
    return (
      <RoundedInput
        label="ISBN"
        value={searchFor}
        onChangeText={text => {
          //Search box should accept numbers only.
          if (!isNaN(text)) setSearchFor(text.trim());
        }}></RoundedInput>
    );
  };

  const renderSearchButton = () => {
    return (
      <RoundedButton title={'Search'} loading={Loading} onPress={fetchBook} />
    );
  };

  return (
    <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: bgColor}}>
      <StatusBar backgroundColor={mainColor} translucent={false} />
      {renderISBNInput()}
      {renderSearchButton()}
      <BookList books={books} />
    </View>
  );
};
export default Home;
