export default function FooterContact({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-2.5">
      {/* Contact Identifier Icon */}
      <Icon className="text-[12px] text-[var(--text)] shrink-0" />
      
      {/* Contact Label Text */}
      <span
        style={{ fontFamily: "var(--font-mono)" }}
        className="text-[12px] text-[var(--text)] tracking-[0.04em]"
      >
        {item.label}
      </span>
    </div>
  );
}