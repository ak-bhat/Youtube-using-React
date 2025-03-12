import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessages(20),
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="absolute w-[22.7rem] bg-gray-100 ml-4 p-1 border border-black rounded-tl-lg">
        <h1 className="font-semibold">Live Chat</h1>
      </div>
      <div className="flex flex-col-reverse ml-4 px-2 border border-black w-full h-[550px] rounded-lg overflow-y-scroll bg-slate-100">
        {messages.map((message, index) => (
          <ChatMessage key={index} name={message.name} message={message.message} />
        ))}
      </div>
      <form
        className="border border-black mx-4 my-2 w-full rounded-lg bg-gray-100 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          
          dispatch(addMessage({
            name:"A.K.Bhat",
            message:liveMessage
          }))  
          
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          className=" border border-black rounded-lg w-60 px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="rounded-lg border border-black bg-white m-2 w-20">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
