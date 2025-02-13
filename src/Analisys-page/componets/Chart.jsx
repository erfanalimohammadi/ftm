import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
export default function AnalisysChart({ maxProfit, maxLoss, currentBalance }) {
  let maxValue = Math.max(maxProfit, currentBalance);
  let minValue = maxLoss;

  // تنظیم دسته‌بندی محور Y
  const step = maxValue > 10000 ? 10000 : 1000; 
  const yDomainMax = Math.ceil(maxValue / step) * step + step;
  const yDomainMin = Math.floor(minValue / step) * step - step; 

  // داده‌های نمودار
  const data = [
    { trade: 0, balance: 0 },
    { trade: 1, balance: maxProfit },
    { trade: 2, balance: currentBalance },
    { trade: 3, balance: maxLoss },
  ];

  const CustomBoxLabel = ({ viewBox, text, color }) => {
    const { x, y } = viewBox;
    const boxWidth = 140;
    const boxHeight = 30;
    return (
      <g className="translate-x-[72px] translate-y-[16px]">
        <rect x={x - boxWidth / 2} y={y - boxHeight / 2} width={boxWidth} height={boxHeight} rx="4"  fill={color}  />
        <text x={x} y={y} fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" dy="5">
          {text}
        </text>
      </g>
    );
  };

  return (
    <div className="w-[65%] flex flex-col justify-start items-start gap-y-4">
      <h3 className="text-nameSize text-textsColor-texts font-medium">Current Results</h3>
      <div className="w-full bg-componentBg-mainBg2 px-6 py-14 flex flex-col justify-center items-center gap-x-3 rounded-[12px]">
        <div className="w-[100%] h-[470px] bg-componentBg-mainBg2 p-4 rounded-[12px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="none" stroke="#444" />
              <XAxis dataKey="trade" stroke="#bbb" label={{ value: "Number of trades", position: "insideBottom", dy: 10 }} />
              <YAxis domain={[yDomainMin, yDomainMax]} tickCount={10} stroke="#bbb" label={{ value: "Balance", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />

              {/* خط بیشترین ضرر */}
              <ReferenceLine
                y={maxLoss}
                stroke="red"
                strokeWidth={1.5}
                strokeDasharray="none"
                label={(props) =>
                  React.createElement(CustomBoxLabel, { ...props, text: `Max Loss: $${maxLoss.toLocaleString()}`, color: "#FC3548" })
                }
              />
              {/* خط بیشترین سود */}
              <ReferenceLine
                y={maxProfit}
                stroke="#1EC7B4"
                strokeWidth={1.5}
                strokeDasharray="none"
                label={(props) =>
                  React.createElement(CustomBoxLabel, { ...props, text: `Max Profit: $${maxProfit.toLocaleString()}`, color: "#1EC7B4" })
                }
              />
              {/* خط وضعیت فعلی */}
              <ReferenceLine
                y={currentBalance}
                stroke={currentBalance < 0 ? "red" : "#1EC7B4"}
                strokeWidth={1.5}
                strokeDasharray="none"
                label={{
                  value: `Current: $${currentBalance.toLocaleString()}`,
                  fill: "#fff",
                  position: "insideRight",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* یجوری باید درک کنی دیگه خودمم نمی دونم چی نوشتم... */}

      </div>

    </div>
  );
}

