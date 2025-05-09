import { useEffect, useState } from 'react';

export const useScrollSpy = (ids: string[], offset = 96) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: 0.1,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
};
