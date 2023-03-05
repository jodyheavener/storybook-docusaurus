import React from 'react';
import Simple from '@theme-original/Footer/Links/Simple';
import type SimpleType from '@theme/Footer/Links/Simple';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof SimpleType>;

export default function SimpleWrapper(props: Props): JSX.Element {
  return (
    <>
      <Simple {...props} />
    </>
  );
}
