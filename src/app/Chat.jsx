import React, { Fragment, useState, useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { MessageBox, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button, Card } from "antd";
import http from "../api";


export const Chat = () => {
  const ref = useRef();
  const messagesEnd = useRef(()=>{});

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')


  const scrollToBottom = () => {
    // messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {

    const getMessage = async () => {

      try {

        const messageResponse = await http.get("get-post?CHAT_ID=4")

        console.log(messageResponse.data[0].data)

        setMessages(messageResponse.data[0].data)
        scrollToBottom()
      } catch (error) {

        console.log(error.message)

      }

    }

    getMessage()

  }, [])

  useEffect(() => {

    ref.current?.scrollIntoView({ behavior: "smooth" });

  }, [message]);


  const sendMessage = async () => {
    try {
      const messageResponse = await http.post("post?USER_ID=4&&TEXT=" + message)

      console.log(messageResponse.data)

      // setMessages(messageResponse.data)
      window.location.reload()
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="chatPage">
      <Navbar />
      <div className="chat">
        {/*<div className="chat-header">
           <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card>
          <Card className="c-h-card">333</Card> 
        </div>*/}
        <div className="chat-list">
          <MessageBox
            position="left"
            type="text"
            text="Hi, how may I be of help?"
            // date={new Date()}
          />


          {

            messages?.map((message, index) => (

              <MessageBox
                // ref={ref}
                key={index}

                position={message.USER_ID == 4 ? "right" : "left"}

                type="text"

                text={message.TEXT}

                date={new Date(message.CREATEDON)}

              />



            ))

          }
          {/* <div style={{ float: "left", clear: "both" }}
            ref={(el) => { messagesEnd = el; }}>
          </div> */}
        </div>
        <div className="chat-input">
          <Input

            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
            rightButtons={
              <Button
                type="primary"
                size="large"
                onClick={sendMessage}>
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
          // onSubmit={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};
