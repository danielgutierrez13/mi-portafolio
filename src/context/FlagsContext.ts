import { createContext, useContext } from 'react';

export interface Flags {
  readonly showJne: boolean;
}

export const FlagsContext = createContext<Flags>({ showJne: false });

export function useFlags(): Flags {
  return useContext(FlagsContext);
}
