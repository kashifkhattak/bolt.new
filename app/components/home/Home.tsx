import { Link } from '@remix-run/react';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export const Home = () => {
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
    <main ref={vantaRef} className="flex flex-col h-screen w-screen">
      <header className="self-start w-full px-12 pt-4 grid grid-cols-3 items-center">
        <h1 className="text-xl text-black">Solange</h1>
        <h5 className="uppercase mx-auto text-black/50 text-xl">Docs</h5>
        <h5 className="uppercase ml-auto text-black/50 text-xl">Whitepaper</h5>
      </header>
      <section className="grow h-full flex flex-col items-center justify-center">
        <h1 className="font-bold mb-6 text-6xl text-black sm:text-8xl">Solange</h1>
        <p className="text-black text-sm sm:text-xl max-w-lg text-center mb-12">
          The ultimate telegram trading bot for <br /> trading on Hyperliquid and <br /> Hyperevm.
        </p>
        <div className="flex items-center gap-8 justify-center">
          <button className="px-8 py-3 font-semibold bg-[#BE2201] text-black hover:bg-[#be2001b7] rounded-md flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl mb-8">
            <span className="font-medium">Start Trading</span>
          </button>
          <Link to="/build">
            <button className="px-8 py-3 font-semibold bg-[#BE2201] text-black hover:bg-[#be2001b7] rounded-md flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl mb-8">
              <span className="font-medium">Start Building</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-8 justify-center">
          <a href="https://x.com/flareai_xyz" target="_blank" rel="noopener noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-black hover:text-gray-300 transition-colors"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>
          <a href="https://t.me/+no--7ji63kw5YjUx" target="_blank" rel="noopener noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className="w-6 h-6 text-black hover:text-gray-300 transition-colors"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19Zm-61.14,36L78.15,126.35l-49.6-9.73ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z"></path>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};
