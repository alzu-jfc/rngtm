import { NativeModule, requireNativeModule } from 'expo';

import { rngtmModuleEvents } from './rngtm.types';

declare class rngtmModule extends NativeModule<rngtmModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<rngtmModule>('rngtm');
