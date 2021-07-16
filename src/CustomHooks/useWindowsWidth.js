import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useWindowsWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreenSize = () => {
    setIsScreenSmall(Dimensions.get('window').width < 600);
  };
  useEffect(() => {
    checkScreenSize();
    Dimensions.addEventListener('change', checkScreenSize);

    return () => Dimensions.removeEventListener('change', checkScreenSize);
  }, []);

  return isScreenSmall;
};

export default useWindowsWidth;
