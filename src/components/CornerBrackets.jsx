export default function CornerBrackets({
  color = "var(--primary)",
  size = 10,
  strokeWidth = 1.2,
}) {
  return (
    <>
      {/* 📐 Top Left Bracket */}
      <svg
        className="absolute -top-[1px] -left-[1px]"
        width={size}
        height={size}
        viewBox="0 0 10 10"
      >
        <path
          d="M10 1H1V10"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* 📐 Top Right Bracket */}
      <svg
        className="absolute -top-[1px] -right-[1px]"
        width={size}
        height={size}
        viewBox="0 0 10 10"
      >
        <path
          d="M0 1H9V10"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* 📐 Bottom Left Bracket */}
      <svg
        className="absolute -bottom-[1px] -left-[1px] z-[1]"
        width={size}
        height={size}
        viewBox="0 0 10 10"
      >
        <path
          d="M10 9H1V0"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* 📐 Bottom Right Bracket */}
      <svg
        className="absolute -bottom-[1px] -right-[1px] z-[1]"
        width={size}
        height={size}
        viewBox="0 0 10 10"
      >
        <path
          d="M0 9H9V0"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>
    </>
  );
}