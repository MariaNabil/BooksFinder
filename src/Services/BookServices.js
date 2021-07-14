import {GET} from '../Helpers/Network';

export const GetBookByISBN = (ISBN, onSuccess, onFailure) => {
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
};
