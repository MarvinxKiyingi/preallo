import React from 'react';
import { Button } from '../../Button/Button';
import Link from 'next/link';
import { IMonth } from '../../../model/IMonth';

const Month = (props: IMonth) => {
  const monthSlug = `/month/${props.month.toLowerCase()}-${props.year}`;
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
      {props.month}
    </Button>
  );
};

export default Month;
