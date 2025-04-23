import LogoTextImage from '../../../icons/logo-text.png';

export function Footer() {
  return (
    <footer className="p-5 relative bg-bolt-elements-background-depth-1 h-[var(--header-height)] py-8 w-full border-t border-white/20 flex items-center justify-between">
      <div className="flex items-center">
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
      <p style={{ fontFamily: 'Inconsolata' }} className="text-bolt-elements-textPrimary text-sm">© 2024 bolt.io</p>
    </footer>
  );
}
