export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
      {title}
    </h2>
  );
}
