import DetailedDestination from "@/components/DetailedDestination";
import { Suspense } from "react";

const SingleDestinationPage = ({ params }: { params: Promise<{ id: string }> }) => {
    return (
        <main className="mx-auto max-w-7xl px-6 py-7 md:px-12">
            <Suspense fallback={<p>Loading...</p>}>
                <DetailedDestination params={params} />
            </Suspense>
        </main>
    );
};

export default SingleDestinationPage;
