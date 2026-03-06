interface ProgressDotsProps {
  total: number;
  current: number;
}

export function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors duration-500 ${
            index === current
              ? 'bg-neutral-800'
              : 'bg-neutral-300'
          }`}
        />
      ))}
    </div>
  );
}
