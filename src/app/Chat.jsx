import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { MessageBox, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button, Card } from "antd";

export const Chat = () => {
  const sendMessage = () => {};

  return (
    <div className="chatPage">
      <Navbar />
      <div className="chat">
        <div className="chat-header">
          <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card>
        </div>
        <div className="chat-list">
          <MessageBox
            position="left"
            type="text"
            text="Hi there !"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />

          <MessageBox
            position="right"
            type="text"
            text="Click to join the meeting"
            date={new Date()}
          />
        </div>
        <div className="chat-input">
          <Input
            placeholder="Type your message here..."
            rightButtons={
              <Button type="primary" size="large">
                Send
              </Button>
            }
            inputStyle={{
              border: "1px solid #ccc",
              margin: 10,
              border: "1px solid #5c5454",
              minHeight: 60,
              borderRadius: 20,
              fontSize: 20,
              fontWeight: "bolder",
              paddingLeft: 20,
            }}
            onSubmit={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};
