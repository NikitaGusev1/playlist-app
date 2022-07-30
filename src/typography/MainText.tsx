import React from 'react';
import { StyleProp, TextProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface IProps extends TextProps {
  children: string;
  onPress?: () => void;
  style?: StyleProp<TextProps>;
}

export const MainText = ({ children, onPress, style }: IProps) => {
  return (
    <>
      {typeof onPress === 'function' ? (
        <BorderlessButton onPress={onPress}>
          <StyledText style={style}>{children}</StyledText>
        </BorderlessButton>
      ) : (
        <StyledText style={style}>{children}</StyledText>
      )}
    </>
  );
};

const StyledText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;
