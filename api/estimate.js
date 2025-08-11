import { setCors, passThrough } from '../utils/common.js';
export default async function handler(req,res){
  if(req.method==='OPTIONS'){ setCors(res); return res.status(200).end(); }
  const { from, to, amount, rateType='floating' } = req.query;
  const url=`https://api.simpleswap.io/get_estimated?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(amount)}&rateType=${encodeURIComponent(rateType)}&api_key=${encodeURIComponent(process.env.SIMPLESWAP_API_KEY)}`;
  const r=await fetch(url); const data=await r.json();
  passThrough(res,r,data);
}
