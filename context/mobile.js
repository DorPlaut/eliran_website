import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export function ContextProvider({ children }) {
  const [isMobile, setIsMobile] = useState();
  // chack
  const checkIfMobile = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else if (window.innerWidth >= 800) {
      setIsMobile(false);
    }
  };
  // set
  useEffect(() => {
    checkIfMobile();
  });
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      checkIfMobile();
    });
  }

  return (
    <Context.Provider value={[isMobile, setIsMobile]}>
      {children}
    </Context.Provider>
  );
}

export function useMobileContext() {
  return useContext(Context);
}
