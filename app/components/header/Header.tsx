/* eslint-disable no-restricted-imports */
import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import LogoTextImage from '../../../icons/logo-text.png';
import DiscordIcon from '../../../icons/discord.svg';
import GithubIcon from '../../../icons/github.svg';
import TwitterIcon from '../../../icons/twitter.svg';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames('flex items-center relative justify-between w-full p-5 py-8 h-[var(--header-height)]', {
        'border-transparent': !chat.started,
        'border-bolt-elements-borderColor': chat.started,
      })}
    >
      <div className="flex items-center gap-2 z-logo text-[#FFFFFF] cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
      </div>

      {chat.started && (
        <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
          <ClientOnly>{() => <ChatDescription />}</ClientOnly>
        </span>
      )}
      {!chat.started && (
        <div className="flex absolute left-1/2 -translate-x-1/2 items-center">
          <a href="https://x.com/tryfrens" target="_blank">
            <img src={TwitterIcon} className="w-5 h-5 mx-4" />
          </a>
          <a href="https://discord.gg/ckPnDd8rFN" target="_blank">
            <img src={DiscordIcon} className="w-6 h-6 mr-4" />
          </a>
          <a href="https://github.com/yute0x/mcp-chat-altiora" target="_blank">
            <img src={GithubIcon} className="w-5 h-5 mr-4" />
          </a>
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
