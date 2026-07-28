import { useEffect, useState, type ReactNode } from 'react';
import { FlagsContext, type Flags } from './FlagsContext';

interface FlagsProviderProps {
  readonly children: ReactNode;
}

export function FlagsProvider({ children }: FlagsProviderProps) {
  const [flags, setFlags] = useState<Flags>({ showJne: false });

  useEffect(() => {
    // En local (dev) no se consulta el flag: se mantiene desactivado.
    if (!import.meta.env.PROD) return;
    fetch('/api/jne-flag')
      .then((r) => r.json())
      .then((data: { value: boolean }) => setFlags({ showJne: data.value }))
      .catch(() => {});
  }, []);

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>;
}
