import React from 'react';
import { Button } from '../../Button/Button';
import Link from 'next/link';
import { IMonth } from '../../../model/IMonth';

const Month = (props: IMonth) => {
  const { slug, month } = props;
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
      {month}
    </Button>
  );
};

export default Month;
