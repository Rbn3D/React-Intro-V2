import React from 'react';

const Icon = ({ children, isFirst = false, marginLeft = 4 }) => (
    <div class={!isFirst && `ml-${marginLeft}`}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        >
            {children}
        </svg>
    </div>
);

export default Icon;