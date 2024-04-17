import { createContext, useState } from "react";
export const SidebarContext = createContext(null);

export default function SidebarContextProvider(props) {
  const [isMobile, setIsMobile] = useState(false);

  function toggleIsMobile() {
    setIsMobile(!isMobile);
  }

  return (
    <SidebarContext.Provider value={{ isMobile, setIsMobile, toggleIsMobile }}>
      {props.children}
    </SidebarContext.Provider>
  );
}
