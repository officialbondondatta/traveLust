import type { Destination } from "@/types/destination";
import DestinationGrid from "@/components/destination-grid";


const ShowcaseDestinations = async () => {
    const res = await fetch(`${process.env.LOCALURL}/destinations`)
    if (!res.ok) throw new Error("Unable to load destinations")
    const destinations: Destination[] = await res.json()
    return (
        <DestinationGrid destinations={destinations} />
    );
};

export default ShowcaseDestinations;
