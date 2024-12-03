import { registerWebModule, NativeModule } from 'expo';

import { rngtmModuleEvents } from './rngtm.types';

class rngtmModule extends NativeModule<rngtmModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(rngtmModule);
