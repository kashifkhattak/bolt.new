import LogoTextImage from '../../../icons/logo-text.png';
import DiscordIcon from '../../../icons/discord.svg';
import GithubIcon from '../../../icons/github.svg';
import TwitterIcon from '../../../icons/twitter.svg';

export function Footer() {
  return (
    <footer className="p-5 relative bg-black/50 h-[var(--header-height)] py-8 w-full border-t border-white/20 flex items-center justify-between">
      <div className="flex invisible items-center">
        <a
          style={{ fontFamily: 'Inconsolata' }}
          className="text-sm hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
          href="#"
        >
          Market Place
        </a>
        <a
          style={{ fontFamily: 'Inconsolata' }}
          className="text-sm hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
          href="#"
        >
          Login
        </a>
        <a
          style={{ fontFamily: 'Inconsolata' }}
          className="text-sm hover:bg-white/10 rounded-md px-4 py-2 text-bolt-elements-textPrimary"
          href="#"
        >
          About
        </a>
      </div>
      <a href="/" className="text-2xl absolute left-1/2 -translate-x-1/2 font-semibold text-accent flex items-center">
        <img src={LogoTextImage} className="w-[56px] inline-block" />
      </a>
      <div className="flex items-center">
        <a href="https://x.com/tryfrens" target="_blank">
          <img src={TwitterIcon} className="w-4 h-4 mx-4" />
        </a>
        <a href="https://discord.gg/ckPnDd8rFN" target="_blank">
          <img src={DiscordIcon} className="w-5 h-5 mr-4" />
        </a>
        <a href="https://github.com/yute0x/frens" target="_blank">
          <img src={GithubIcon} className="w-4 h-4 mr-4" />
        </a>
      </div>
    </footer>
  );
}
