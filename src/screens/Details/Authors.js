import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';
import styles from './styles';

function Authors(props) {
  console.log('props', props.query);
  const fetchAuthor = async () =>
    await (await fetch(`https://openlibrary.org${props.query}.json`)).json();

  const {data, error, status} = useQuery('users', fetchAuthor);

  if (status === 'success') console.log('data', data);
  return (
    <View>
      <View>
        {status === 'error' && <Text>--</Text>}

        {status === 'loading' && <Text>Loading...</Text>}

        {status === 'success' && <Text style={styles.author}>{data.name}</Text>}
      </View>
    </View>
  );
}

export default Authors;
