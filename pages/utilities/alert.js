import React from "react";

import "sweetalert2/dist/sweetalert2.css";
import "../../planningcenter/system/css/system.css";
import "../../planningcenter/sweetalert2/css/alert.css";

import Alert from "../../planningcenter/sweetalert2/src";

export default () => (
  <div
    style={{
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "minmax(min-content, max-content)",
      gridGap: 16,
      padding: 16
    }}
  >
    <button
      onClick={() =>
        Alert.confirm({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Confirm
    </button>
    <button
      onClick={() =>
        Alert.confirmCreate({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Confirm Create
    </button>
    <button
      onClick={() =>
        Alert.confirmDestroy({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Confirm Destroy
    </button>
    <button
      onClick={() =>
        Alert.error({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Confirm Error
    </button>
    <button
      onClick={() =>
        Alert.info({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Info
    </button>
    <button
      onClick={() =>
        Alert.success({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Success
    </button>
    <button
      onClick={() =>
        Alert.warn({ title: "Uh Oh!", text: "Something went wrong" })
      }
    >
      Warn
    </button>
  </div>
);
