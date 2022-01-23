import styled from '@emotion/styled';

export function createStyledTag<
  Props extends object
  // Component extends React.ElementType = any
>(tag: any, styles: any, options?: any) {
  options = {
    name: 'bits',
    ...options,
  };

  // if (Array.isArray(styles)) {
  //   styles = compose(...styles);
  // }

  return styled(tag)(styles, options);
}
