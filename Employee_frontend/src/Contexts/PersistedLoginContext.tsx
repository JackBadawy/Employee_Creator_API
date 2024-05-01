import {
  createContext,
  useState,
  ReactNode,
  FC,
  useContext,
  useEffect,
} from "react";

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
  const [persistedLogin, setPersistedLogin] = useState<PersistedLogin>(() => {
    const savedLogin = sessionStorage.getItem("persistedLogin");
    return savedLogin ? JSON.parse(savedLogin) : { username: "", password: "" };
  });

  useEffect(() => {
    sessionStorage.setItem("persistedLogin", JSON.stringify(persistedLogin));
  }, [persistedLogin]);

  return (
    <PersistedLoginContext.Provider
      value={{ persistedLogin, setPersistedLogin }}
    >
      {children}
    </PersistedLoginContext.Provider>
  );
};
