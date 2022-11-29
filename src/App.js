import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./app/Chat";
import { Dashboard } from "./app/components/Dashboard";
import { Layout } from "./app/Layout";
import { Login } from "./app/Login";
import { Register } from "./app/Register";

export const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
