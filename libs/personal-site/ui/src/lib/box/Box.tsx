import { BoxStylesProps, getBoxStyles } from '@mdunhem/shared-styles';
import { createStyledTag } from '../createStyledTag';

export interface BoxProps extends BoxStylesProps {
  as?: React.ElementType | undefined;
}

export const Box = createStyledTag<BoxProps>('div', getBoxStyles);
