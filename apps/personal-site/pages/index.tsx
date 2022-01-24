import { AppLayout, AppStylesCacheProvider } from '@mdunhem/personal-site-ui';

export function Index() {
  return (
    <AppStylesCacheProvider>
      <AppLayout>
        <h1>
          <span> Hello there, </span>
          Welcome personal-site 👋
        </h1>
        <div>testing</div>
      </AppLayout>
    </AppStylesCacheProvider>
  );
}

export default Index;
