import React from 'react';
import { StyleProp, TextProps, ViewProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { MainText } from '../../typography';

interface IButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewProps>;
  labelStyle?: StyleProp<TextProps>;
}

export const MainButton = ({
  label,
  onPress,
  style,
  labelStyle,
}: IButtonProps) => {
  return (
    <Container style={style} onPress={onPress}>
      <Label style={labelStyle}>{label}</Label>
    </Container>
  );
};

const Container = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    padding: ${theme.sizes.appPadding}px ${theme.sizes.getSpacing(3)}px;
    border-radius: ${theme.roundness.button}px;
  `}
`;

const Label = styled(MainText)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
  `}
`;
