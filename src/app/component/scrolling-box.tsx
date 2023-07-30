import React from 'react';

const ScrollingBox = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="h-full w-10 absolute left-1/2 transform -translate-x-1/2">
                <div className="border border-white border-solid h-4 animate-scroll" />
                <div className="border border-white border-solid h-4 mt-2 animate-scroll" />
                <div className="border border-white border-solid h-4 mt-2 animate-scroll" />
                <div className="border border-white border-solid h-4 mt-2 animate-scroll" />
            </div>
        </div>
    );
};

export default ScrollingBox;
