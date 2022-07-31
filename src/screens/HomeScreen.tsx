import { cloneDeep, isEmpty } from 'lodash';
import React, { Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { $enum } from 'ts-enum-util';

import { AppLayout } from '../layouts/AppLayout';
import { RootState } from '../redux/store';
import { ECategories } from '../typescript/statics/ECategories';
import { Category } from './components/Category';

export const HomeScreen = () => {
  const songsData = useSelector((state: RootState) => state.songs.data);

  const renderCategory = useCallback(
    (category: ECategories) => {
      const songs = cloneDeep(songsData);
      const shuffled = songs?.[category].sort(() => 0.5 - Math.random());
      const selected = shuffled?.slice(0, 5);

      return (
        <Fragment key={category}>
          {selected && !isEmpty(selected) ? (
            <Category data={selected} category={category} />
          ) : null}
        </Fragment>
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
