import React from 'react';

const Message = ({ isMe = false, username, usernameColor = "gray", message}) => (
<div className={`flex mb-2 ${isMe && 'justify-end'}`}>
    <div className="rounded py-2 px-3"
            style={{ backgroundColor: isMe ? '#E2F7CB' : '#F2F2F2' }}
            >
            {
                !isMe && <p className={`text-sm text-${usernameColor}-400`}>{username}</p>
            }
        <p className="text-sm mt-1">
            {message}
        </p>
        <p className="text-right text-xs text-grey-dark mt-1">
            12:45 pm
        </p>
    </div>
</div>);

export default Message;