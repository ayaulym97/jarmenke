import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {normalize} from "../utils"
const IoniconsBtn = ({ name, color, size, containerStyle, style, onPress }) => {
  return (
    <TouchableOpacity
   //  hitSlop={{ top: 30,  left: 30, right: 30 }}
      style={containerStyle}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={normalize(size)} style={style} />
    </TouchableOpacity>
  );
};

export default IoniconsBtn;
