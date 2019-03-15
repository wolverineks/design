import React from "react";
import classnames from "classnames";

export function unstable_classSelectorsFromProps(predicate = false) {
  return (cls = "") => {
    return (props = null) => {
      return (predicate
        ? [
            `${cls}`,
            ...Object.entries(props).map(
              ([property, value]) => `${cls}--${property}_${value}`
            )
          ]
        : []
      ).join(" ");
    };
  };
}

export function getScaledButtonClasses({ height }) {
  return unstable_classSelectorsFromProps(height)("ScaledButton")({ height });
}

export function getRestfulButtonClasses({ action }) {
  return unstable_classSelectorsFromProps(action)("RestfulButton")({ action });
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

export default ComposedButton;
