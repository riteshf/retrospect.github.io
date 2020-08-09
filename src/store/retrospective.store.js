// vendor
import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// constants
import {
  ADD_CARD,
  LIKE_CARD,
  DELETE_CARD,
  CARD_BY_TYPE_INFO,
} from "./retrospective.constants";

export const initialState = CARD_BY_TYPE_INFO.reduce((acc, { type }) => {
  acc[type] = [];
  return acc;
}, {});

export const RetrospectiveContext = createContext(initialState);

export const RetrospectiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_CARD: {
        const { type, message, likes } = action.data;
        const newState = {
          ...state,
          [type]: [
            ...state[type],
            {
              key: uuidv4(),
              message,
              likes,
            },
          ],
        };
        return newState;
      }
      case LIKE_CARD: {
        const { type, cardKey } = action.data;
        const cards = state[type].map((card) => {
          if (card.cardKey === cardKey) card.likes += 1;
          return card;
        });

        const newState = {
          ...state,
          [type]: cards,
        };
        return newState;
      }
      case DELETE_CARD: {
        const { type, cardKey } = action.data;
        const cards = state[type].filter((card) => card.cardKey !== cardKey);

        const newState = {
          ...state,
          [type]: cards,
        };
        return newState;
      }
      default:
        throw state;
    }
  }, initialState);

  return (
    <RetrospectiveContext.Provider value={{ state, dispatch }}>
      {children}
    </RetrospectiveContext.Provider>
  );
};
