export function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      {title && (
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && <p className="mt-3 text-neutral-700">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
