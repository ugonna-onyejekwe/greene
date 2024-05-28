import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export const Box_con = ({ topic, subTopic }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "box_con active" : "box_con"}>
      <div className="header" onClick={() => setActive(!active)}>
        <h4>
          {" "}
          <span>{active ? <FiChevronUp /> : <FiChevronDown />}</span> {topic}
        </h4>
      </div>
      <div className="drop_down">
        {subTopic.map((i, key) => {
          return (
            <p>
              <span>
                <VscDebugBreakpointLog />
              </span>
              {i}
            </p>
          );
        })}
      </div>
    </div>
  );
};
