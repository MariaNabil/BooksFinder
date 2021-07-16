import {bgColor, mainColor, secondColor} from '../../constants/colors';

export default {
  label: isFocused => ({
    fontSize: 14,
    top: 9,
    zIndex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    color: isFocused ? secondColor : mainColor,
    backgroundColor: bgColor,
  }),

  textInput: isFocused => ({
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    fontSize: 16,
    borderColor: isFocused ? secondColor : null,
    borderRadius: 10,
    textAlign: 'left',
  }),
};
