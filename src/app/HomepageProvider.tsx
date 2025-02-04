"use client";

import {
  HomepageAction,
  HomepageContext,
  HomepageDispatch,
  HomepageManager,
  THomepageContext
} from "@/context";
import { useReducer } from "react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import Handler from "./Handler";
import { usePopupDispatch } from "@/context/popup";

type HomepageProviderProps = {
  value: THomepageContext;
  children?: React.ReactNode;
};

export default function Provider({ ...props }: HomepageProviderProps) {
  const { value, children } = props;

  const [ctx, dispatch] = useReducer(Reducer, value);
  const createPopup = usePopupDispatch();

  const Manager = async (action: HomepageAction) => {
    const { _id } = ctx.user;

    const { statusCode, body } = await Handler(_id, action);

    if (statusCode !== 200) {
      return createPopup({
        variant: "error",
        message: body.message
      });
    } else {
      console.log("success", body.message);

      switch (action.type) {
        case "event":
          if (action.mode === "refresh") {
            action.payload = body.event;
          }
          break;
        default:
          break;
      }

      createPopup({
        variant: "success",
        message: body.message
      });
    }

    return dispatch(action);
  };

  return (
    <HomepageContext.Provider value={ctx}>
      <HomepageDispatch.Provider value={dispatch}>
        <HomepageManager.Provider value={Manager}>
          <SessionAuth>{children}</SessionAuth>
        </HomepageManager.Provider>
      </HomepageDispatch.Provider>
    </HomepageContext.Provider>
  );
}

export const Reducer = (subject: THomepageContext, action: HomepageAction) => {
  switch (action.type) {
    case "event":
      const { itinerary } = subject;

      switch (action.mode) {
        case "refresh":
          return {
            ...subject,
            itinerary: {
              ...itinerary,
              events: [
                ...itinerary.events.filter(
                  (event) => event._id !== action.payload._id
                ),
                action.payload
              ]
            }
          };
        case "add":
          return {
            ...subject,
            itinerary: {
              ...itinerary,
              events: [...itinerary.events, action.payload]
            }
          };
        case "delete":
          return {
            ...subject,
            itinerary: {
              ...itinerary,
              events: [
                ...itinerary.events.filter(
                  (event) => event._id !== action.payload._id
                )
              ]
            }
          };
        default:
          return subject;
      }
  }

  return subject;
};
