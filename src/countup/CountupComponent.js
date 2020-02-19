import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CountupComponent() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 8000,
    startOnMount: false
  });
  return (
    <div>
      <h3>
        <CountUp end={200} />
      </h3>
      <h3>
        <CountUp end={200} duration={5} />
      </h3>
      <h3>
        <CountUp start={100} end={500} duration={6} />
      </h3>
      {/* usecase #1 */}
      <h3>
        <CountUp end={1000} prefix="$" decimals={2} />
      </h3>
      <h3>
        <CountUp end={1000} suffix="USD" decimals={2} />
      </h3>

      {/* from hook */}
      <div>
        <h3>{countUp}</h3>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/ Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
    </div>
  );
}

export default CountupComponent;
