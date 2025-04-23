import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import LogoTextImage from '../../../icons/logo-text.png';
import { ThemeSwitch } from '../ui/ThemeSwitch';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames(
        'flex items-center justify-between border-b border-white/20 w-full bg-bolt-elements-background-depth-1 p-5 py-8 h-[var(--header-height)]',
        {
          'border-transparent': !chat.started,
          'border-bolt-elements-borderColor': chat.started,
        },
      )}
    >
      <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
        <a href="/" className="text-2xl font-semibold text-accent flex items-center">
          <img src={LogoTextImage} className="w-[56px] inline-block" />
        </a>
      </div>
      <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
        <ClientOnly>{() => <ChatDescription />}</ClientOnly>
      </span>
      {!chat.started && (
        <div className="flex grow w-full items-center justify-end">
          <a
            style={{ fontFamily: 'Inconsolata' }}
            className="text-sm font-medium hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
            href="#"
          >
            Market Place
          </a>
          <a
            style={{ fontFamily: 'Inconsolata' }}
            className="text-sm font-medium hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
            href="#"
          >
            Login
          </a>
          <a
            style={{ fontFamily: 'Inconsolata' }}
            className="text-sm font-medium hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
            href="#"
          >
            About
          </a>
          <div className="flex items-center border-t border-bolt-elements-borderColor p-4">
            <ThemeSwitch className="ml-auto" />
          </div>
        </div>
      )}
      {chat.started && (
        <ClientOnly>
          {() => (
            <div className="mr-1">
              <HeaderActionButtons />
            </div>
          )}
        </ClientOnly>
      )}
    </header>
  );
}
