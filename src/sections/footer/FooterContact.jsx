export default function FooterContact({ item }) {
  const Icon = item.icon;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Icon
        style={{
          fontSize: "12px",
          color: "var(--text)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--text)",
          letterSpacing: "0.04em",
        }}
      >
        {item.label}
      </span>
    </div>
  );
}
