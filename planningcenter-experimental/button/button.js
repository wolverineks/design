import React from "react";
import classnames from "classnames";

// TODO: momentarily inlined for site
import { UNSTABLE_getClassSelectorsFromProps as getClassSelectorsFromProps } from "../../planningcenter/utilities";

export function getScaledButtonClasses({ height }) {
  return getClassSelectorsFromProps("ScaledButton")([
    "height"
  ])({ height });
}

export function getRestfulButtonClasses({ action }) {
  return getClassSelectorsFromProps("RestfulButton")([
    "action"
  ])({ action });
}

export function PutButton(props) {
  // action is intentionally overridden
  return <ComposedButton {...props} action="put" />;
}

export function DestroyButton(props) {
  // action is intentionally overridden
  return <ComposedButton {...props} action="destroy" />;
}

export function CancelButton(props) {
  // action is intentionally overridden
  return <ComposedButton {...props} action="cancel" />;
}

// TODO: Add APIs
//       * add ButtonCluster__Button class to children
//       * get provide `height` on Context
export function ButtonCluster({
  as: As = "div",
  className,
  ...props
}) {
  return (
    <As
      className={classnames(className, "ButtonCluster")}
      {...props}
    />
  );
}

export function ComposedButton({
  action,
  as: As = "button",
  className,
  height,
  type,
  ...props
}) {
  let elementProps = null;

  if (As === "button") elementProps = { type };
  if (As === "input") elementProps = { type: "submit" };

  return (
    <As
      className={classnames(
        className,
        getRestfulButtonClasses({ action }),
        getScaledButtonClasses({ height }),
        "Button"
      )}
      {...elementProps}
      {...props}
    />
  );
}

export default ComposedButton;
