// routes/build.tsx
import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Frens' }, { name: 'description', content: 'Talk with Frens, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function ChatRoute() {
  return (
    <div style={{ backgroundImage: 'url(/background.png)' }} className="flex bg-cover bg-center flex-col h-full w-full">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}
