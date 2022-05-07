import { lazy } from 'react';

export const CreateLazyChunk = pageName => {
  return lazy(() =>
    import(`../Pages/${pageName}`).then(module => ({
      default: module[pageName],
    }))
  );
};
