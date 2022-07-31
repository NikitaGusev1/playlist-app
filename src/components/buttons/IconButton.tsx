import React from 'react';
import { Image, ImageSourcePropType, StyleProp, ViewProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IProps {
  icon: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<ViewProps>;
}

export const IconButton = ({ icon, onPress, style }: IProps) => {
  return (
    <Button style={style} onPress={onPress}>
      <Image source={icon} />
    </Button>
  );
};

const Button = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`;
