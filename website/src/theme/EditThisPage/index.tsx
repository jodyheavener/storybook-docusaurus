import React from 'react';
import EditThisPage from '@theme-original/EditThisPage';
import type EditThisPageType from '@theme/EditThisPage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof EditThisPageType>;

export default function EditThisPageWrapper(props: Props): JSX.Element {
  return (
    <>
      <EditThisPage {...props} />
    </>
  );
}
