import React, { FC, useState } from 'react';
import { Random } from 'random-js';
import { SparkleType } from '../../types/SparkleType';
import useRandomInterval from '../../hooks/useRandomInterval';
import SparkleInstance from '../SparkleInstance/SparkleInstance';
import { SparklesProps } from './Sparkles.props';

const Sparkles: FC<SparklesProps> = ({ renderSparkles }) => {
  // prettier-ignore
  const [sparkles, setSparkles] = useState <Array<SparkleType>>([]);

  const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
  const random = new Random();

  const generateSparkle = (color = DEFAULT_COLOR): SparkleType => {
    return {
      id: String(random.integer(10000, 99999)),
      createdAt: Date.now(),
      // Bright yellow color:
      color,
      size: random.integer(10, 20),
      style: {
        top: `${random.integer(0, 100)}%`,
        left: `${random.integer(0, 100)}%`,
        zIndex: 2,
      },
    };
  };

  useRandomInterval(
    () => {
      if (renderSparkles === false) {
        setSparkles([]);
        return;
      }

      const now = Date.now();

      // Create a new sparkle
      const sparkle = generateSparkle();

      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle: SparkleType) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });

      // Include our new sparkle
      nextSparkles.push(sparkle);

      // Make it so!
      setSparkles(nextSparkles);
    },
    50,
    750,
  );

  return (
    <>
      {sparkles.map((sparkle) => (
        <SparkleInstance
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
    </>
  );
};

export default Sparkles;
