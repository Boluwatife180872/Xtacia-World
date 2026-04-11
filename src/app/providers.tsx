import { ConvexClientProvider } from "@/components/ConvexClientProvider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClientProvider>
      {children}
    </ConvexClientProvider>
  );
}
