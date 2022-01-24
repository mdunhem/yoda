import { getFlexStyles } from '@mdunhem/shared-styles';
import { FlexboxProps } from 'styled-system';
import { BoxProps } from '../box/Box';
import { createStyledTag } from '../createStyledTag';

/* eslint-disable-next-line */
export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex = createStyledTag<FlexProps>('div', getFlexStyles);
