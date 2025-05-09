import { useRef } from 'react';
import { useScrollSpy } from '~/hooks/useScrollSpy';

export const Wallpaper = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const executiveRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const hypercoreRef = useRef<HTMLDivElement>(null);
  const uniqueRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const flareTokenRef = useRef<HTMLDivElement>(null);
  const communityLinksRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: 'solange-whitepaper', ref: introductionRef },
    { name: 'executive-summary', ref: executiveRef },
    { name: 'platform-highlights', ref: platformRef },
    { name: 'built-for-solana', ref: hypercoreRef },
    { name: 'why-solange', ref: uniqueRef },
    { name: 'join-the-solange-community', ref: tokenomicsRef },
    { name: 'solange-whitepaper', ref: flareTokenRef },
    { name: 'community-links', ref: communityLinksRef },
  ];

  const activeId = useScrollSpy(
    sections.map((section) => section.name),
    25,
  );

  return (
    <main className="bg-black">
      <section
        style={{ background: 'linear-gradient(180deg, rgba(201,71,48,0.03) 0%, rgba(0,0,0,1) 100%)' }}
        className="w-full min-h-screen text-white"
      >
        <div className="top-0 left-0 w-full bg-black pt-4 px-12 text-md grid grid-cols-3 z-50 transition-opacity duration-300 opacity-100">
          <div className="flex items-center">
            <div className="flex items-center flex-row gap-2">
              <span className="hover:cursor-pointer transition-opacity text-xl text-white opacity-50 hover:cursor-pointer">
                SOLANGE
              </span>
            </div>
          </div>
          <div className="flex mx-auto items-center gap-8"></div>
          <div />
        </div>
        <div className="flex pt-2">
          <aside className="hidden md:flex flex-col w-64 bg-[#0a0a0a] p-6 border-r border-[#c94730] sticky top-0 h-screen overflow-y-auto">
            <nav className="space-y-3 text-base">
              {sections.map((id) => (
                <p
                  key={id.name}
                  onClick={() => {
                    const element = id.ref?.current;

                    if (element) {
                      const yOffset = -30;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`block transition-colors duration-200 hover:text-[#c94730] ${
                    activeId === id.name ? 'text-[#c94730] font-bold' : 'text-white'
                  }`}
                >
                  {id.name
                    .replace(/-/g, ' ')
                    .replace('hypercore & hyperevm', 'Hypercore & Hyperevm')
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </p>
              ))}
            </nav>
          </aside>
          <section className="w-full md:w-[calc(100%-16rem)] max-w-3xl mx-auto py-12 px-6 md:px-8">
            <article className="space-y-16 text-base leading-relaxed">
              <section ref={introductionRef} id="introduction">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Solange Whitepaper</h1>
                <p className="text-lg text-gray-300 mb-6">
                  The all-in-one platform for trading and building on Solana.
                </p>
                <p className="text-gray-300">
                  Solange is a unified platform designed to make trading, automation, and development on Solana simple,
                  fast, and accessible. Whether you're trading tokens, setting up bots, or building on-chain apps,
                  Solange brings it all together in one smooth interface—built specifically for Solana users.
                </p>
                <p className="text-gray-300 mt-4">
                  From placing trades to deploying tools, everything works right out of the box with minimal setup and
                  zero friction.
                </p>
              </section>
              <section ref={executiveRef} id="executive-summary">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Executive Summary</h2>
                <p className="text-gray-300">
                  Solange brings together the best parts of Solana—fast execution, low fees, and open DeFi—and wraps
                  them in a single, easy-to-use platform. Traders can act on real-time signals, automate strategies, and
                  manage their positions directly within the app. Builders can create and deploy basic apps, smart
                  contracts, or bots without needing to code or use external tools.
                </p>
                <p className="text-gray-300 mt-4">
                  Whether you're an active user or just starting out, Solange is your shortcut to doing more on Solana
                  without the hassle.
                </p>
              </section>
              <section ref={platformRef} id="platform-highlights">
                <h2 className="text ScalarType-2xl md:text-3xl font-semibold mb-4">Platform Highlights</h2>
                <p className="text-gray-300">
                  Solange is built for usability, performance, and simplicity. Some key features include:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-3">
                  <li>
                    <strong>Trade Quickly:</strong> Access Solana's top DEXs like Jupiter and Orca with the best pricing
                    through one clean interface.
                  </li>
                  <li>
                    <strong>Set Up Automations:</strong> Build and run simple strategies like auto-buys or price
                    alerts—no coding required.
                  </li>
                  <li>
                    <strong>Build On-Chain Tools:</strong> Launch tokens, contracts, or dApps using low-code templates
                    and guided flows.
                  </li>
                  <li>
                    <strong>All-in-One Dashboard:</strong> Everything—trading, building, managing—happens in one place.
                  </li>
                </ul>
              </section>
              <section ref={hypercoreRef} id="hypercore-&-hyperevm">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Built for Solana</h2>
                <p className="text-gray-300">
                  Solange is tightly integrated with Solana's high-performance blockchain and the top tools in its
                  ecosystem:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-3">
                  <li>
                    <strong>Native Solana Support:</strong> Built to fully leverage Solana's fast finality and low-cost
                    transactions.
                  </li>
                  <li>
                    <strong>DEX Aggregation:</strong> Powered by Jupiter for optimized trades.
                  </li>
                  <li>
                    <strong>Smart Contract Deployment:</strong> Supports Anchor and other frameworks with built-in
                    templates.
                  </li>
                  <li>
                    <strong>Wallet Compatibility:</strong> Works with Phantom, Backpack, and WalletConnect for full
                    accessibility.
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  This means faster workflows, cleaner execution, and less jumping between platforms. Why Solange?
                </p>
                <p className="text-gray-300 mt-4">
                  Solange simplifies the full stack of what you can do on Solana—from trading to building. Here’s why
                  users choose it:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-3">
                  <li>
                    <strong>One Platform, All Functions:</strong> You don't need five different apps anymore.
                  </li>
                  <li>
                    <strong>No-Code Friendly:</strong> Designed for users who want results, not a technical learning
                    curve.
                  </li>
                  <li>
                    <strong>Solana-First Design:</strong> Purpose-built for speed and scale, fully aligned with the
                    Solana ecosystem.
                  </li>
                  <li>
                    <strong>Smooth UX:</strong> From setup to execution, it just works.
                  </li>
                </ul>
              </section>
              <section ref={uniqueRef} id="unique-value">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join the Solange Community</h2>
                <p className="text-gray-300">
                  Solange is more than a tool—it's a gateway to building, trading, and scaling on Solana with less
                  effort and more control. Join us and be part of a growing community reshaping what’s possible
                  on-chain.
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-3">
                  <li>
                    <strong>Wesbite:</strong>{' '}
                    <a className="text-[#c94730] hover:underline" href="https://solange.io" target="__blank">
                      https://solange.io
                    </a>
                  </li>
                  <li>
                    <strong>Telegram:</strong>
                  </li>
                  <li>
                    <strong>Twitter/X:</strong>{' '}
                    <a className="text-[#c94730] hover:underline" href="https://x.com/solange_io" target="__blank">
                      https://x.com/solange_io
                    </a>
                  </li>
                  <li>
                    <strong>Product Hunt:</strong>
                  </li>
                  <li>
                    <strong>Discord:</strong>
                  </li>
                  <li>
                    <strong>Github:</strong>
                  </li>
                </ul>
              </section>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};
