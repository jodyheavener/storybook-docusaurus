import React from 'react';
import ThemedImage from '@theme-original/ThemedImage';
import type ThemedImageType from '@theme/ThemedImage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof ThemedImageType>;

export default function ThemedImageWrapper(props: Props): JSX.Element {
  return (
    <>
      <ThemedImage {...props} />
    </>
  );
}
