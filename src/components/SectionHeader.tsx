export function SectionHeader({
  eyebrow,
  title,
  text,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="max-w-xl">
        {eyebrow && (
          <p className={`text-sm font-bold uppercase tracking-[0.12em] ${dark ? "text-lime" : "text-brand"}`}>{eyebrow}</p>
        )}
        <h2
          className={`mt-2 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.015em] sm:text-[2.6rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {text && <p className={`max-w-sm leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
