import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Footer } from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Frens' }, { name: 'description', content: 'Talk with Bolt, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      <div className="pt-10 bg-bolt-elements-background-depth-1">
        <Footer />
      </div>
    </div>
  );
}
