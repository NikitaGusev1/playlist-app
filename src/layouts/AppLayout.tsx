import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled, { css } from 'styled-components/native';

interface IProps {
  children: React.ReactElement[] | React.ReactElement;
  withPadding?: boolean;
  withoutScrollView?: boolean;
  withHeader?: boolean;
}

export const AppLayout = ({
  children,
  withPadding = false,
  withoutScrollView = false,
  withHeader = false,
}: IProps) => {
  return (
    <Container>
      {withoutScrollView ? (
        <ContentView withHeader={withHeader} withPadding={withPadding}>
          {children}
        </ContentView>
      ) : (
        <Scroll withHeader={withHeader} withPadding={withPadding}>
          {children}
        </Scroll>
      )}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

const ContentView = styled.View<{
  withPadding?: boolean;
  withHeader?: boolean;
}>`
  flex: 1;
  ${({ withPadding, withHeader, theme }) => css`
    padding-horizontal: ${withPadding ? theme.sizes.appPadding : 0}px;
    padding-top: ${withHeader ? theme.sizes.header : 0}px;
  `}
`;

const Scroll = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})<{ withPadding?: boolean; withHeader?: boolean }>`
  ${({ withPadding, withHeader, theme }) => css`
    padding-horizontal: ${withPadding ? theme.sizes.appPadding : 0}px;
    margin-top: ${withHeader ? theme.sizes.header : 0}px;
  `}
`;
