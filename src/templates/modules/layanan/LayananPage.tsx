import { PageHeader } from "@/templates/components/PageHeader";
import { DataLayananPage } from "@/templates/components/DataLayananPage";

export function LayananPage() {
  return (
    <main className="mb-24 mt-6 flex w-full flex-col items-center gap-y-8 px-4 lg:px-16">
      <PageHeader title="Layanan" />
      <DataLayananPage />
    </main>
  );
}
