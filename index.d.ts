import { NativeModule } from 'react-native';

export interface RNCloudFsInterface extends NativeModule {
    syncCloud: () => Promise<boolean>;
    deleteFromCloud: (item: any) => Promise;
    listFiles: (options: { scope: string; targetPath: string }) => Promise;
    copyToCloud: (options: {
      mimeType: string;
      scope: string;
      sourcePath: { path: string };
      targetPath: string;
    }) => Promise;
    isAvailable: () => Promise<boolean>;
  }
  
  declare module 'react-native' {
    interface NativeModulesStatic {
      RNCloudFs: RNCloudFsInterface;
    }
  }
  