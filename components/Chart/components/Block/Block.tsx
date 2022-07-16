import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface IBlockProps {
  label: string;
  value: number;
}

function Block({ label, value }: IBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.style.height = `${Math.floor(value) * 2}px`;
    }
  }, []);
  return (
    <div className='flex-1 flex flex-col gap-2'>
      <div className='bg-soft-red rounded-md hover:bg-opacity-50' ref={blockRef}></div>
      <p className='text-xs text-center'>{label}</p>
    </div>
  );
}

Block.propTypes = {};

export default Block;
