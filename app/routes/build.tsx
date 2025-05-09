// routes/build.tsx
import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useEffect, useRef } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Solange' }, { name: 'description', content: 'Talk with Solange, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function ChatRoute() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && vantaRef.current && window.VANTA?.FOG) {
      vantaEffectRef.current = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        THREE: window.THREE,
      });
    }

    return () => {
      vantaEffectRef.current?.destroy?.();
    };
  }, []);

  return (
    <div ref={vantaRef} className="flex bg-cover bg-center flex-col h-full w-full">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}
