import React from "react";
import ChatCard from "./ChatCard";

const ChatsList = () => (
    <div className="bg-grey-lighter flex-1 overflow-auto">
      <ChatCard name="Los Mercenarios" image={{ width: 12, height: 12, alt: "Expendables 3", src:"https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg" }} lastMessage="Get Andrés on this movie ASAP!" isFocused />
      <ChatCard name="El Chuache" image={{ width: 12, height: 12, alt: "Chuache", src:"https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg" }} lastMessage="I'll be back" />
      <ChatCard name="Russell Crowe" image={{ width: 12, height: 12, alt: "El tío de Gladiator", src:"https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg" }} lastMessage="Hold the line!" />
      <ChatCard name="Tom Cruise" image={{ width: 12, height: 12, alt: "Tom Cruise", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5" }} lastMessage="Show me the money!" />
      <ChatCard name="Harrison Ford" image={{ width: 12, height: 12, alt: "Harrison Solo", src:"https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg" }} lastMessage="Tell Jabba I have the money" />
    </div>
);

export default ChatsList;