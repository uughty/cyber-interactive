// src/components/ui/reusable-input.tsx

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const ReusableInput: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 font-medium">{label}</label>}
    <input
      className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      {...props}
    />
  </div>
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const ReusableTextarea: React.FC<TextareaProps> = ({ label, ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 font-medium">{label}</label>}
    <textarea
      className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      {...props}
    />
  </div>
);
