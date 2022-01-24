import { createStyledTag } from './createStyledTag';
import { Flex } from './flex/Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppLayoutProps extends React.ComponentPropsWithoutRef<any> {}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledAppLayout = createStyledTag(Flex, {
  color: 'blue',
});

export function AppLayout({ children }: AppLayoutProps) {
  return <StyledAppLayout flexDirection={'row'}>{children}</StyledAppLayout>;
}
