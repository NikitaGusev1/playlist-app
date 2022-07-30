import React, { useCallback } from 'react';
import { $enum } from 'ts-enum-util';

import { categories } from '../../mockData/Categories';
import { AppLayout } from '../layouts/AppLayout';
import { strings } from '../strings/strings';
import { ECategories } from '../typescript/statics/ECategories';
import { Category } from './components/Category';

export const HomeScreen = () => {
  const songsData = categories;

  const renderCategory = useCallback(
    (category: ECategories) => {
      const shuffled = songsData[category].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);

      return (
        <Category
          data={selected}
          title={strings.categories[category]}
          key={category}
        />
      );
    },
    [songsData],
  );

  return (
    <AppLayout withPadding={true} withHeader={true}>
      <>{$enum(ECategories).map(renderCategory)}</>
    </AppLayout>
  );
};
