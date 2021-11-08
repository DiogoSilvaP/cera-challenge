import React, { FC, useEffect, useState } from "react";
import { Props } from "./types";

const Clock: FC<Props> = (props) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
      60000
    );
  }, []);

  return (
    <div style={props?.style} data-testid="Clock">
      {time}
    </div>
  );
};

export default Clock;
