export default function DestinationsSkeleton() {
  return (
    <div role="status" aria-label="Loading destinations">
      <span className="sr-only">Loading destinations...</span>
      <div aria-hidden="true" className="motion-safe:animate-pulse">
        <div className="mt-4 h-5 w-36 rounded bg-neutral-100" />
        <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index}>
              <div className="aspect-video bg-neutral-100" />
              <div className="mt-3 h-4 w-20 rounded bg-neutral-100" />
              <div className="mt-1 flex items-center justify-between gap-3">
                <div className="h-7 w-1/2 rounded bg-neutral-100" />
                <div className="h-5 w-20 rounded bg-neutral-100" />
              </div>
              <div className="mt-1 h-4 w-32 rounded bg-neutral-100" />
              <div className="mt-3 h-4 w-24 rounded bg-neutral-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
