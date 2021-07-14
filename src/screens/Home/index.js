import React from 'react';
import {useState} from 'react';
import {StatusBar, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {bgColor, mainColor} from '../../constants/colors';
import {largePadding, smallPadding} from '../../constants/styles';
import RoundedButton from '../../CustomComponents/RoundedButton';
import RoundedInput from '../../CustomComponents/RoundedInput';
import {GetBookByISBN} from '../../Services/BookServices';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';

const Home = props => {
  const [searchFor, setSearchFor] = useState('');
  const [books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(false);
  let cancelFetchData;

  const fetchBook = async () => {
    //Check The Internet Connection Before Fetching All Movies
    const {isConnected} = await NetInfo.fetch();
    if (isConnected) {
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
    } else {
      // If Not Connected To the Internet
      Toast.show(
        'You Are Offline , Please Check Your Internet Connection',
        Toast.LONG,
      );
    }
  };

  const renderISBNInput = () => {
    return (
      <RoundedInput
        label="ISBN"
        value={searchFor}
        onChangeText={text => {
          setSearchFor(text);
        }}></RoundedInput>
    );
  };

  const renderSearchButton = () => {
    return (
      <RoundedButton title={'Search'} loading={Loading} onPress={fetchBook} />
    );
  };

  const renderBookListHeader = () => (
    <Text style={{fontWeight: 'bold', fontSize: 20}}>{'Found Books :'}</Text>
  );
  const renderBooksList = () => {
    return (
      <FlatList
        ListHeaderComponent={
          books && books.length ? renderBookListHeader : null
        }
        data={books}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderBookItem}
        style={{marginVertical: largePadding}}></FlatList>
    );
  };

  const renderBookItem = ({item}) => {
    const {title} = item;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          paddingVertical: smallPadding,
          paddingHorizontal: smallPadding,
          borderRadius: 10,
          marginVertical: 5,
          marginHorizontal: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 5,
        }}
        onPress={() => props.navigation.navigate('Details', {item: item})}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: bgColor}}>
      <StatusBar backgroundColor={mainColor} translucent={false} />
      {renderISBNInput()}
      {renderSearchButton()}
      {renderBooksList()}
    </View>
  );
};
export default Home;
