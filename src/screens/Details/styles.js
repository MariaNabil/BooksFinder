import {bgColor} from '../../constants/colors';
import {
  largeFontSize,
  largePadding,
  smallFontSize,
  smallPadding,
} from '../../constants/styles';

export default {
  root: {
    paddingHorizontal: largePadding,
    paddingVertical: smallPadding,
    flex: 1,
    backgroundColor: bgColor,
  },
  title: {
    fontWeight: 'bold',
    fontSize: largeFontSize,
    alignSelf: 'center',
    paddingVertical: smallPadding,
  },
  fields: {
    fontSize: smallFontSize,
    paddingVertical: smallPadding,
  },
  authorsView: {paddingVertical: smallPadding},
  author: {fontSize: smallFontSize},
};
