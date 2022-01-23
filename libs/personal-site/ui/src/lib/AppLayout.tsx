import { createStyledTag } from './createStyledTag';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppLayoutProps extends React.ComponentPropsWithoutRef<any> {}

const StyledAppLayout = createStyledTag('div', {
  color: 'blue',
});

export function AppLayout({ children }: AppLayoutProps) {
  return <StyledAppLayout>{children}</StyledAppLayout>;
}
