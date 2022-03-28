import React, { useEffect, useState } from "react";

const PercentageRange = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    while (percent < 81) {
      setTimeout(
        setPercent((prevState) => prevState++),
        100
      );
    }
  }, []);

  return (
    <div className="absolute bg-black w-24 md:w-36 lg:w-40 xl:w-44  rounded-3xl h-8 md:h-10 lg:h-12 bottom-0 left-[60%]">
      <div
        className="h-full rounded-3xl bg-gradient-to-r from-purple-progstart to-purple-progend flex items-center absolute left-0 transition-all"
        style={{ width: `${percent}%` }}
      >
        <div className="h-1 bg-gradient-to-r w-[80%] from-[#558DFE80] to-[#FFFFFF80] flex justify-end">
          <div className="w-1 h-1 bg-white absolute rounded-full shadow-blur translate-x-1/2"></div>
        </div>
      </div>
      <span className="text-white absolute top-1/2 right-2.5 -translate-y-1/2 text-xs font-medium">
        {percent}%
      </span>
    </div>
  );
};

export { PercentageRange };
