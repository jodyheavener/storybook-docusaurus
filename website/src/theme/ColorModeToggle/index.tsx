import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): JSX.Element {
  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}
