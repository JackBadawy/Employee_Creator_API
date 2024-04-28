import { createContext, useState, ReactNode, FC } from "react";

export interface PersistedLogin {
  username: string;
  password: string;
}

interface PersistedLoginContextType {
  persistedLogin: PersistedLogin;
  setPersistedLogin: React.Dispatch<React.SetStateAction<PersistedLogin>>;
}
