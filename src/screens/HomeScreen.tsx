import React, { useCallback } from 'react';
import { $enum } from 'ts-enum-util';

import { categories } from '../../mockData/Categories';
import { AppLayout } from '../layouts/AppLayout';
import { strings } from '../strings/strings';
import { ECategories } from '../typescript/statics/ECategories';
import { Category } from './components/Category';

export const HomeScreen = () => {
  const data = categories;

  const renderCategory = useCallback(
    (category: ECategories) => {
      return (
        <Category
          data={data[category]}
          title={strings.categories[category]}
          key={category}
        />
      );
    },
    [data],
  );

  return (
    <AppLayout withPadding={true} withHeader={true}>
      <>{$enum(ECategories).map(renderCategory)}</>
    </AppLayout>
  );
};
