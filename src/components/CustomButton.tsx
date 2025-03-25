import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../resources';

interface BtnProps {
  style: any;
  title: string;
  onPress: () => void;
}
const CustomButton = (props: BtnProps) => {
  const {style, title, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: COLORS.fbBlue,
          marginTop: '5%',
          padding: '3%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        },
        style,
      ]}>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 14,
          fontFamily: 'Roboto-Regular',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});