import React, { useContext } from "react";
import { UserContext, useUserContextData } from '../hooks/use-user-context'

export const useUserContext = () => {
  return useContext(UserContext)
}

interface Iprops {
  children: React.ReactNode
}

export const UserContextProvider = ({ children }:Iprops) => {
  const {
    user,
    updateUser,
    logout,
    userFavoriteProducts,
    toggleFavoriteProduct,
  } = useUserContextData()

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        logout,
        userFavoriteProducts,
        toggleFavoriteProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}