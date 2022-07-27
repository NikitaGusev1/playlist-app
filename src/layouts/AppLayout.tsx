import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled, { css } from 'styled-components/native';

interface IProps {
  children: React.ReactElement[] | React.ReactElement;
  withPadding?: boolean;
  withoutScrollView?: boolean;
}

export const AppLayout = ({
  children,
  withPadding = false,
  withoutScrollView = false,
}: IProps) => {
  return (
    <Container>
      {withoutScrollView ? (
        <ContentView withPadding={withPadding}>{children}</ContentView>
      ) : (
        <Scroll withPadding={withPadding}>{children}</Scroll>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

const ContentView = styled.View<{ withPadding?: boolean }>`
  flex: 1;
  ${({ withPadding, theme }) => css`
    padding-horizontal: ${withPadding ? theme.sizes.appPadding : 0}px;
  `}
`;

const Scroll = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})<{ withPadding?: boolean }>`
  ${({ withPadding, theme }) => css`
    padding-horizontal: ${withPadding ? theme.sizes.appPadding : 0}px;
  `}
`;
