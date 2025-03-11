import Image from "next/image";

export function PageHeader({ title }: { title: string }) {
  return (
    <section className="w-full space-y-6">
      <h1 className="text-center text-3xl font-semibold text-[#1A7AE3]">{title}</h1>
      <div className="relative h-14 space-y-2 py-6">
        <div className="h-1 bg-[#1A7AE3]" />
        <div className="mx-6 h-1 bg-[#EEEE22] lg:mx-12" />
        <div className="absolute left-1/2 top-0 -translate-x-12 -translate-y-1 bg-[#fafafa] px-6">
          <Image
            src="/templates/components/PKK.png"
            className="h-14 w-14"
            alt="Logo PKK"
            sizes="100%"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
