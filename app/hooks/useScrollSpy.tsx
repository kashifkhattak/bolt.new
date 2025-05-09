import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);

        if (el) {
          const top = el.getBoundingClientRect().top;

          if (top - offset < window.innerHeight / 2) {
            current = id;
          }
        }
      }

      if (current !== activeId) {
        setActiveId(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
