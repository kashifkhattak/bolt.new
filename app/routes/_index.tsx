// routes/index.tsx
import { type MetaFunction } from '@remix-run/cloudflare';
import { Home } from '~/components/home/Home';

export const meta: MetaFunction = () => {
  return [{ title: 'Home | Frens' }];
};

export default function Index() {
  return <Home />;
}
