"use client";

import axios from "axios";
import React, { useState } from "react";
import FormField from "./FormField";
import CustomButton from "./CustomButton";
import { useAuth } from "@/context/AuthContext";
import LoginStatus from "@/components/LoginStatus";

const API_URL = "https://api-dev.sendbypass.com/v1/login/";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  async function handleSubmit() {
    setIsLoading(true);
    const response = await axios.post(API_URL, signInForm);
    login(response.data.access);
    setIsLoading(false);
  }

  return (
    <div className="p-4">
      this page should not be visible form webview and the login page of
      react-native should be visible insteads
      <LoginStatus />
      <FormField
        label="Email"
        value={signInForm.email}
        handleChangeText={(e) => setSignInForm({ ...signInForm, email: e })}
        className="mt-7"
      />
      <FormField
        label="Password"
        value={signInForm.password}
        handleChangeText={(e) => setSignInForm({ ...signInForm, password: e })}
        className="mt-7"
      />
      <CustomButton
        title="Sign In"
        handlePress={handleSubmit}
        containerStyles="mt-7 w-full"
        isLoading={isLoading}
      />
    </div>
  );
}
