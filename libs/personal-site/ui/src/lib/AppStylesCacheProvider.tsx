import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const emotionCache = createCache({ key: 'md' });

export const AppStylesCacheProvider = ({
  children,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
React.ComponentPropsWithoutRef<any>) => (
  <CacheProvider value={emotionCache}>{children}</CacheProvider>
);
