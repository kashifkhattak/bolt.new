// routes/index.tsx
import { type MetaFunction } from '@remix-run/cloudflare';
import { Wallpaper } from '~/components/Wallpaper/Wallpaper';

export const meta: MetaFunction = () => {
  return [{ title: 'Solange' }, { name: 'description', content: 'Talk with Solange, an AI assistant from StackBlitz' }];
};

export default function Index() {
  return <Wallpaper />;
}
