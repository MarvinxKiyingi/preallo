import React from 'react';
import { Button } from '../../Button/Button';
import Link from 'next/link';
import { IMonth } from '../../../model/IMonth';

const Month = (props: IMonth) => {
  const { slug, monthName } = props;
  const monthSlug = `/month/${slug}`;

  return (
    <Button
      fullWidth
      color='primary'
      onClick={() => {}}
      variant='contained'
      version='monthPicker'
      LinkComponent={Link}
      href={monthSlug}
    >
      {monthName}
    </Button>
  );
};

export default Month;
