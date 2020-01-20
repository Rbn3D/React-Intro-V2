import React from 'react';

const MessageInput = ({ placeholder }) => (
    <div className="flex-1 mx-4">
                  <input
                    className="w-full border rounded px-2 py-2"
                    type="text"
                    placeholder={placeholder}
                  />
                </div>
);

export default MessageInput;