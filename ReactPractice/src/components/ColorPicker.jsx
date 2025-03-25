import { useState } from "react";

export default function ColorPicker() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#8A2BE2", "#FF1493", "#00CED1", "#F4A460"];

  return (
    <div className="flex flex-col items-center justify-center h-screen transition-all duration-300" style={{ backgroundColor: bgColor }}>
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Color Picker</h1>
        <div className="flex gap-3 flex-wrap justify-center">
          {colors.map((color) => (
            <button
              key={color}
              className="w-20 h-30 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color, width:'10px', height:"10px"}}
              onClick={() => setBgColor(color)}
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600">Selected Color: <span className="font-semibold" style={{ color: bgColor }}>{bgColor}</span></p>
      </div>
    </div>
  );
}
