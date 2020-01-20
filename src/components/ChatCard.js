import React from 'react';
import Image from './Image';

const ChatCard = ({ name, image: { width, height, alt, src}, lastMessage, isFocused}) => (
    <div className={`${isFocused ? 'bg-gray-light' : 'bg-white'} px-3 flex items-center hover:bg-grey-lighter cursor-pointer`}>
                  <div>
                    <Image 
                        width={width}
                        height={height}
                        alt={alt}
                        src={src}
                    />
                  </div>
                  <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div className="flex items-bottom justify-between">
                      <p className="text-grey-darkest">{name}</p>
                      <p className="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p className="text-grey-dark mt-1 text-sm">{lastMessage}</p>
                  </div>
                </div>
);

export default ChatCard;