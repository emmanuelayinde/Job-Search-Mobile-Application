import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, size, handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleOnPress}>
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(size)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
