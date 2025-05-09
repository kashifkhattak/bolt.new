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
          <a href="https://x.com/solange_io" target="_blank">
            <img src={TwitterIcon} className="w-5 h-5 mx-4" />
          </a>
          <a href="https://discord.gg/44jd6vv83e" target="_blank">
            <img src={DiscordIcon} className="w-6 h-6 mr-4" />
          </a>
          <a href="https://github.com/yute0x/mcp-chat-altiora" target="_blank">
            <img src={GithubIcon} className="w-5 h-5 mr-4" />
          </a>
          <a href="https://t.me/+no--7ji63kw5YjUx" target="_blank" rel="noopener noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className="w-6 h-6 text-[#FFFFFF] transition-colors"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19Zm-61.14,36L78.15,126.35l-49.6-9.73ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z"></path>
            </svg>
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
