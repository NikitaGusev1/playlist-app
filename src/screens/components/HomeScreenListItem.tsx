import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { icons } from '../../assets/icons';
import { IconButton } from '../../components/buttons';
import { strings } from '../../strings/strings';
import { MainText } from '../../typography';

interface IProps {
  title: string;
  minutes: number;
  seconds: number;
  onPress: () => void;
}

export const HomeScreenListItem = ({
  title,
  minutes,
  seconds,
  onPress,
}: IProps) => {
  return (
    <>
      <Button onPress={onPress}>
        <Title>{title}</Title>
        <Wrapper>
          {minutes ? (
            <TotalLength>{`${minutes}${strings.minutes} ${seconds}${strings.seconds}`}</TotalLength>
          ) : null}
          <Chevron icon={icons.chevrons.right} onPress={onPress} />
        </Wrapper>
      </Button>
      <Divider />
    </>
  );
};

const Button = styled(RectButton)`
  flex-direction: row;
  ${({ theme }) => css`
    padding: ${theme.sizes.getSpacing(2.5)}px ${theme.sizes.appPadding}px;
    align-items: center;
  `}
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.divider};
`;

const Title = styled(MainText)`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.spacing / 2}px;
    font-weight: ${theme.font.weight.bold};
  `}
`;

const TotalLength = styled(MainText)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
  `}
`;

const Wrapper = styled.View`
  margin-left: auto;
  flex-direction: row;
`;

const Chevron = styled(IconButton)`
  ${({ theme }) => css`
    margin-left: ${theme.sizes.appPadding}px;
  `}
`;
