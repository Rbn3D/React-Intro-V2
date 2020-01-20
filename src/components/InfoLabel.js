import React from 'react';

const InfoLabel = ({ text, backgroundColor }) => (
    <div className="flex justify-center mb-2">
        <div
            className="rounded py-2 px-4"
            style={{ backgroundColor }}
        >
        <p className="text-sm">{text}</p>
    </div>
  </div>
);

export default InfoLabel;