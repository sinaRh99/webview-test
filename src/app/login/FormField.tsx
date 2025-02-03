"use client";

import React, { useState } from "react";

interface Props {
  label: string;
  value: string;
  handleChangeText: (e: string) => void;
  className?: string;
  placeholder?: string;
}

const FormField = ({
  label,
  value,
  placeholder,
  handleChangeText,
  className,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="text-base text-gray-100 font-medium">{label}</div>
      <div className="flex w-full h-16 px-4 bg-gray-900 border-2 border-gray-950 rounded-2xl focus-within:border-purple-400 items-center flex-row">
        <input
          className="flex-1 bg-gray-900 h-full focus:outline-none text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChangeText(e.target.value)}
          type={label === "Password" && !showPassword ? "password" : "text"}
        />

        {label === "Password" && (
          <div onClick={() => setShowPassword((perv) => !perv)}>
            <div
              className={`w-6 h-6 rounded-full ${
                showPassword ? "bg-blue-400" : "bg-orange-400"
              } `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
