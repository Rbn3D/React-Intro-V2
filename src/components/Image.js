import React from 'react';

const Image = ({alt, src, width = 10, height = 10}) => (
    <img
    className={`w-${width} h-${height} rounded-full`}
    alt={alt}
    src={src}
  />
);

export default Image;