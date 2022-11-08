import { createClient } from "@layerzerolabs/scan-client";

const client = createClient("testnet");
async function main() {
  const resp = await client.getMessagesBySrcTxHash("0x");
  console.log(resp);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//this doesn't work for the moment..
