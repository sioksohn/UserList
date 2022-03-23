import React from "react";

export interface UserInform {
  name: string;
  age: string;
  id: string;
}

export interface WrapProps {
  className: string;
  children: React.ReactNode;
}

export type ErrorMessage = { title: string; message: string };

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
