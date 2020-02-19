import React, { forwardRef } from "react";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

function TooltipComponent() {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy arrow={false} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy delay={1000} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="right" content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-start" content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
    </div>
  );
}

export default TooltipComponent;
