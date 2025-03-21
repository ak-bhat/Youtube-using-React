import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex p-2 shadow-sm">
    <img
      className="h-6"
      alt="user-icon"
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    />
    <span className="px-2 font-bold">{name}</span>
    <span>{message}</span>
  </div>
  )
}

export default ChatMessage