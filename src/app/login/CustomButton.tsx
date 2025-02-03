import React from "react";

interface Props {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: Props) => {
  return (
    <button
      onClick={handlePress}
      disabled={isLoading}
      className={`bg-purple-500 rounded-xl min-h-[50px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <span className={`text-primary font-semibold text-lg ${textStyles}`}>
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
