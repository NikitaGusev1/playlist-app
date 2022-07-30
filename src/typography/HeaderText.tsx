import styled, { css } from 'styled-components/native';

import { MainText } from './MainText';

export const HeaderText = styled(MainText)`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.h1};
  `}
`;
