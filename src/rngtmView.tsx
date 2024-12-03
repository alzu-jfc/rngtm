import { requireNativeView } from 'expo';
import * as React from 'react';

import { rngtmViewProps } from './rngtm.types';

const NativeView: React.ComponentType<rngtmViewProps> =
  requireNativeView('rngtm');

export default function rngtmView(props: rngtmViewProps) {
  return <NativeView {...props} />;
}
