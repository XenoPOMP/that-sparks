// @ts-ignore
import styles from './Sparkle.module.scss';
import cn from 'classnames';
import React, { FC } from 'react';
import { SparkleProps } from './Sparkle.props';
import Sparkles from '../Sparkles/Sparkles';

const Sparkle: FC<SparkleProps> = ({ children, renderSparkles }) => {
  return (
    <div className={cn(styles.wrapper)}>
      <Sparkles renderSparkles={renderSparkles} />

      {children}
    </div>
  );
};

export default Sparkle;
