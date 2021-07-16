import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {mainColor} from '../../constants/colors';
import {QueryClient, QueryClientProvider} from 'react-query';
import Authors from './Authors';
import styles from './styles';

const Details = props => {
  const item = props.route?.params?.item;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.root}>
        <StatusBar backgroundColor={mainColor} translucent={false} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.fields}>
          {`Published By : ${item.publishers.join(' and ')}`}
        </Text>
        <Text style={styles.fields}>
          {`Published At : ${item.publish_date}`}
        </Text>
        <Text style={styles.fields}>
          {`Number Of Pages : ${item.number_of_pages}`}
        </Text>

        {item.authors && item.authors.length ? (
          <View style={styles.authorsView}>
            <Text style={styles.author}>Authors :</Text>
            {item.authors.map(author => (
              <Authors query={author.key} />
            ))}
          </View>
        ) : null}
      </View>
    </QueryClientProvider>
  );
};
export default Details;
