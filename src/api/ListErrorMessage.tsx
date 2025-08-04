import React from "react";

interface ListErrorMessageProps {
  errors: string[];
}

const ListErrorMessage: React.FC<ListErrorMessageProps> = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <ul className="text-red-500 text-sm list-disc pl-5">
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
};

export default ListErrorMessage;
