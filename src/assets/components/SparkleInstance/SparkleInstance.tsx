import React, { FC } from 'react';
import { SparkleInstanceProps } from './SparkleInstance.props';
// @ts-ignore
import styles from './SparkleInstance.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const SparkleInstance: FC<SparkleInstanceProps> = ({ color, size, style }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(styles.instance)}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
      }}
      style={{ top: style.top, left: style.left }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 7.5C14.0151 7.5 13.0398 7.30601 12.1299 6.9291C11.2199 6.55219 10.3931 5.99974 9.6967 5.3033C9.00026 4.60686 8.44781 3.78007 8.0709 2.87013C7.69399 1.96018 7.5 0.984914 7.5 0C7.5 0.984914 7.30601 1.96018 6.9291 2.87013C6.55219 3.78007 5.99974 4.60686 5.3033 5.3033C4.60686 5.99974 3.78007 6.55219 2.87013 6.9291C1.96018 7.30601 0.984914 7.5 0 7.5C0.984914 7.5 1.96018 7.69399 2.87013 8.0709C3.78007 8.44781 4.60686 9.00026 5.3033 9.6967C5.99974 10.3931 6.55219 11.2199 6.9291 12.1299C7.30601 13.0398 7.5 14.0151 7.5 15C7.5 14.0151 7.69399 13.0398 8.0709 12.1299C8.44781 11.2199 9.00026 10.3931 9.6967 9.6967C10.3931 9.00026 11.2199 8.44781 12.1299 8.0709C13.0398 7.69399 14.0151 7.5 15 7.5Z'
        fill={color}
      />
    </motion.svg>
  );
};

export default SparkleInstance;
