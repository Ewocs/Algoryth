import { Suspense } from "react";
import ProblemsPageContent from "../../components/ProblemsPageContent";

export default function ProblemsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProblemsPageContent />
    </Suspense>
  );
}
