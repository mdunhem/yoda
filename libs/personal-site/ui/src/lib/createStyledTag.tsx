import styled, {
  StyledComponent as _StyledComponent,
  StyledOptions,
} from '@emotion/styled';
import { Styles } from '@mdunhem/shared-styles';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';

export type StyledComponent<
  InnerProps,
  StyleProps,
  Theme extends Record<string, unknown>
> = _StyledComponent<InnerProps, StyleProps, Theme>;

export function createStyledTag<
  Props extends object,
  Element = HTMLElement,
  ElementProps = React.HTMLAttributes<Element> & React.RefAttributes<Element>
>(
  tag: keyof JSX.IntrinsicElements | React.ComponentType<Props & ElementProps>,
  styles: Styles<Props>
): StyledComponent<
  ElementProps,
  React.PropsWithChildren<Props>,
  Record<string, unknown>
> {
  const shouldForwardProp = createShouldForwardProp([...props, 'as']);

  const styledOptions: StyledOptions<Props> = {
    shouldForwardProp,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- TODO: figure out why the types don't match up, even tho they do
  const Component = styled(tag, styledOptions)(styles);

  return Component as StyledComponent<
    ElementProps,
    Props,
    Record<string, unknown>
  >;
}
