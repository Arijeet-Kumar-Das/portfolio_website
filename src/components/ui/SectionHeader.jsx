export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}) {
  const isLeft = align === "left";

  return (
    <div className={`${isLeft ? "text-left" : "text-center"} ${className}`}>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <h2 className="text-3xl font-semibold leading-snug text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`mt-4 text-slate-300 ${
            isLeft ? "max-w-2xl" : "mx-auto max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
