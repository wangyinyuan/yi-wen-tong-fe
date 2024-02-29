import { USER_TOKEN } from "@/constants/Token";
import { UserToken } from "@/types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<any>(undefined);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserToken | undefined>(undefined);

    // 尝试从 AsyncStorage 中获取用户 token
    useEffect(() => {
        const loadToken = async () => {
            const token = await AsyncStorage.getItem(USER_TOKEN);
            if (token) {
                setUser({ token });
            }
            else {
                // 跳转到登录页面
                // router.replace('/login/');
            }
        }

        loadToken();
    }, [])


  const login = (userToken: UserToken) => {
    setUser(userToken);
    AsyncStorage.setItem(USER_TOKEN, userToken.token);
  };

  const logout = () => {
    setUser(undefined);
    AsyncStorage.removeItem(USER_TOKEN);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
