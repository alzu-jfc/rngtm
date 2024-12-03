import * as React from 'react';

import { rngtmViewProps } from './rngtm.types';

export default function rngtmView(props: rngtmViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
