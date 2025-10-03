import axios from "axios";

async function fetchBitcoinPrice() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchBitcoinPrice;
