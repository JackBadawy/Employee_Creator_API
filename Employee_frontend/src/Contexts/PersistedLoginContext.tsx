import { createContext, useState, ReactNode, FC, useContext } from "react";

export interface PersistedLogin {
  username: string;
  password: string;
}

interface PersistedLoginContextType {
  persistedLogin: PersistedLogin;
  setPersistedLogin: React.Dispatch<React.SetStateAction<PersistedLogin>>;
}

export const PersistedLoginContext = createContext<
  PersistedLoginContextType | undefined
>(undefined);

interface PersistedLoginProviderProps {
  children: ReactNode;
}

export const PersistedLoginProvider: FC<PersistedLoginProviderProps> = ({
  children,
}) => {
  const [persistedLogin, setPersistedLogin] = useState<PersistedLogin>({
    username: "",
    password: "",
  });

  return (
    <PersistedLoginContext.Provider
      value={{ persistedLogin, setPersistedLogin }}
    >
      {children}
    </PersistedLoginContext.Provider>
  );
};
