import {GET} from '../Helpers/Network';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';

export const GetBookByISBN = async (ISBN, onSuccess, onFailure) => {
  //Check The Internet Connection Before Fetching All Movies
  const {isConnected} = await NetInfo.fetch();
  if (isConnected) {
    return GET(
      ISBN,
      res => {
        onSuccess && onSuccess(res);
      },
      err => {
        // Do something special if this request fails or ignore
        onFailure && onFailure(err);
      },
    );
  } else {
    // If Not Connected To the Internet
    Toast.show(
      'You Are Offline , Please Check Your Internet Connection',
      Toast.LONG,
    );
    onFailure && onFailure();
  }
};
