import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { authState } from "@/entity/atoms/auth/auth";


interface UseAuth {
  isAuth: boolean;
  setAuth: (arg: boolean) => void;
}

export const useAuth = (): UseAuth => {
  const [isAuth, setIsAuth] = useRecoilState<boolean>(authState);

  const setAuth = useCallback(
    (arg: boolean) => {
      setIsAuth(arg)
    },
    [setIsAuth]
  );

  return { isAuth, setAuth };
}