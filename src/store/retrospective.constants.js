// vendors
import { v4 as uuidv4 } from "uuid";

// actions
export const ADD_CARD = "ADD_CARD";
export const LIKE_CARD = "LIKE_CARD";
export const DELETE_CARD = "DELETE_CARD";

// constatns
export const WENT_WELL = "WENT_WELL";
export const CAN_IMPROVE = "CAN_IMPROVE";
export const START_DOING = "START_DOING";
export const ACTION_ITEM = "ACTION_ITEM";

export const CARD_BY_TYPE_INFO = [
  {
    key: uuidv4(),
    title: "What went well",
    type: WENT_WELL,
    color: "#ffc790",
  },
  {
    key: uuidv4(),
    title: "What can be imporved",
    type: CAN_IMPROVE,
    color: "#ccfffe",
  },
  {
    key: uuidv4(),
    title: "Start doing",
    type: START_DOING,
    color: "#c3ee8e",
  },
  {
    key: uuidv4(),
    title: "Action items",
    type: ACTION_ITEM,
    color: "#e85e91",
  },
];
