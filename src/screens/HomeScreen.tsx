import React from 'react';

import { AppLayout } from '../layouts/AppLayout';
import { MainText } from '../typography/MainText';

export const HomeScreen = () => {
  return (
    <AppLayout withPadding={true} withHeader={true}>
      <MainText>template</MainText>
    </AppLayout>
  );
};
