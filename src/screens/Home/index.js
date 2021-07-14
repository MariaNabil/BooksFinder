import React from 'react';
import {useState} from 'react';
import {StatusBar, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {bgColor, mainColor} from '../../constants/colors';
import {largePadding, smallPadding} from '../../constants/styles';
import ItemSeparator from '../../CustomComponents/ItemSeparator';
import RoundedButton from '../../CustomComponents/RoundedButton';
import RoundedInput from '../../CustomComponents/RoundedInput';

const Home = props => {
  const [searchFor, setSearchFor] = useState(null);
  const [books, setBooks] = useState([]);
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
      <RoundedButton
        title={
          searchFor && searchFor !== '' && books && books.length
            ? 'Search Again'
            : 'Search'
        }
        onPress={() => {
          console.log('search', searchFor);
          //call request Here
        }}
      />
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
        ItemSeparatorComponent={() => <ItemSeparator />}
        style={{marginVertical: largePadding}}></FlatList>
    );
  };

  const renderBookItem = ({item}) => {
    const {title} = item;
    return (
      <TouchableOpacity
        style={{
          paddingVertical: smallPadding,
        }}>
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
