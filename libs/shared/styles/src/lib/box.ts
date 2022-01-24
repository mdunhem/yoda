import css, { get } from '@styled-system/css';
import {
  color,
  ColorProps,
  compose,
  flexbox,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { Styles } from './types';
import { TODOAny } from './util';

export interface BoxStylesProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps {}

const sx = (props: TODOAny) => css(props.sx)(props.theme);
const base = (props: TODOAny) => css(props.__css)(props.theme);
const boxBase = (): Styles => ({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
});
const variant = ({ theme, variant, tx = 'variants' }: TODOAny) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

// export const getBoxStyles = (props: BoxStylesProps) => {
//   return compose(
//     boxBase,
//     base,
//     variant,
//     sx,
//     (p) => p.css,
//     space,
//     layout,
//     typography,
//     color,
//     flexbox
//   )(props);
// };

export const getBoxStyles = (props: BoxStylesProps) => {
  return [
    boxBase(),
    // variant(props),
  ];
};

// export const getBoxStyles = () => {
//   return compose(
//     boxBase,
//     base,
//     variant,
//     sx,
//     (props) => props.css,
//     compose(space, layout, typography, color, flexbox)
//   );
// };
