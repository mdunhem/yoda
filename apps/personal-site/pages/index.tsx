import styled from '@emotion/styled';

const StyledPage = styled('div')({
  color: 'blue',
});

export function Index() {
  return (
    <StyledPage>
      <h1>
        <span> Hello there, </span>
        Welcome personal-site 👋
      </h1>
    </StyledPage>
  );
}

export default Index;
