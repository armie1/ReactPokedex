import React from "react";

const FavoriteContext = React.createContext({
  FavoriteContext: [],
  updateFavoritePokemon: (id) => null
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
