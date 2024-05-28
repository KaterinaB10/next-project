import React, { ReactNode } from "react";

interface PopUpMessageProps {
  trigger: boolean;
  children: ReactNode;
}

export function PopUpMessage(props: PopUpMessageProps) {
  return props.trigger ? (
    <div className="pop-up-message-container hide">{props.children}</div>
  ) : (
    ""
  );
}
