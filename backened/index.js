const express = require("express");
const app = express();
const port = 5001;
const Moralis = require("moralis").default;
const cors = require("cors");

require("dotenv").config({ path: ".env" });

app.use(cors());
app.use(express.json());

const MORALIS_API_KEY =
  "0B62MVs4MbcX8lW0EncOIQ87hzA5OXfl1PkIkk9ZLXNxHUBRKvBpgqESp5qAFLSB";

app.get("/getnfts", async (req, res) => {
  try {
    const { query } = req;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: query.address,
      chain: query.chain,
    });

    return res.status(200).json(response);
  } catch (e) {
    console.log(`Something went wrong ${e}`);
    return res.status(400).json();
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
