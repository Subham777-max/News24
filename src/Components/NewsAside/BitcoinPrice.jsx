import { useQuery } from "@tanstack/react-query";
import fetchBitcoinPrice from "../../Service/fetchBitcoinPrice";
function BitcoinPrice(){
    const { data, isLoading, error } = useQuery({
        queryKey: ["bitcoinPrice"], 
        queryFn: () => fetchBitcoinPrice(),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });
    if (isLoading) return <p>Loading news...</p>;
    if (error) throw error;
    return(
        <>{data.bitcoin.usd}$</>
    )
}

export default BitcoinPrice;