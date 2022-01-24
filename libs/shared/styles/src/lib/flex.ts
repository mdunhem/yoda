import { compose, FlexboxProps } from 'styled-system';
import { Styles } from './types';
import { BoxStylesProps, getBoxStyles } from './box';

export interface FlexBoxStylesProps extends BoxStylesProps, FlexboxProps {}

export const getFlexStyles = (
  props: FlexBoxStylesProps
): Styles<FlexBoxStylesProps> => {
  // return compose(getBoxStyles, () => ({ display: 'flex' }))(props);
  return [getBoxStyles(props), () => ({ display: 'flex' })];
};
