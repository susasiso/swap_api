export default async function handler(req, res) {
  res.status(200).json({ status:'ok', time:new Date().toISOString(), hasKey:!!process.env.SIMPLESWAP_API_KEY });
}
