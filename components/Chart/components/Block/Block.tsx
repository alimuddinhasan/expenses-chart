import React, { useEffect, useRef, useState } from "react";

interface IBlockProps {
  label: string;
  value: number;
}

function Block({ label, value }: IBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const [isMouseEnter, setMouseEnter] = useState(false);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.style.height = `${Math.floor(value) * 2}px`;
    }
  }, []);

  useEffect(() => {
    if (valueRef.current) {
      valueRef.current.style.display = isMouseEnter ? "block" : "none";
    }
  }, [isMouseEnter]);

  return (
    <div
      className='flex-1 flex flex-col gap-2 items-center relative'
    >
      <div
        className='bg-dark-brown h-auto w-auto p-1 rounded-md absolute -top-8'
        ref={valueRef}
        data-testid='value-container'
      >
        <p
          className='text-xs text-center text-very-pale-orange'
        >
          ${value}
        </p>
      </div>
      <div
        className='bg-soft-red rounded-md hover:bg-opacity-50 w-8'
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        ref={blockRef}
        data-testid='block'
      ></div>
      <p className='text-xs text-center'>
        {label}
      </p>
    </div>
  );
}

export default Block;
