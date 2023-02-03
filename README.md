# That sparks ✨✨✨

This is a simple React library that provides some sparkles to your project ✨✨✨.\

## Usage

```typescript jsx
<Sparkle renderSparkles={markPercentage === 100}>
  <div className={cn(styles.percentage, markPercentage === 100 ? styles.oneHundred : '')}>
    <span className={cn(styles.progress)}>
      {progressStyle === 'percent' && `${roundPercentage()} %`}
      {progressStyle === 'count' && `${currentMarks} / ${totalMarks}`}
    </span>
  </div>
</Sparkle>
```

``renderSparkles``: condition of rendering sparkles. If it is not provided, sparkles will render by default.