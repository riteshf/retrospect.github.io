// vendor
import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// constants
import {
  ADD_CARD,
  CARD_BY_TYPE_INFO,
  LIKE_CARD,
} from "./retrospective.constants";

const initialState = CARD_BY_TYPE_INFO.reduce((acc, { type }) => {
  acc[type] = [
    {
      key: uuidv4(),
      message: "temp",
      likes: 0,
    },
  ];
  return acc;
}, {});

const store = createContext(initialState);
const { Provider } = store;

const RetrospectiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_CARD: {
        const { type, message, likes } = action.data;
        const newState = {
          ...initialState,
          [initialState[type]]: [
            ...initialState[type],
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
        const { type, key } = action.data;
        const newState = {
          ...initialState,
          [initialState[type]]: initialState[type].map((card) => {
            if (card.key === key) card.likes += 1;
            return card;
          }),
        };
        return newState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, RetrospectiveProvider };
