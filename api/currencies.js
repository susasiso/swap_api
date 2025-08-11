import { setCors, passThrough } from '../utils/common.js';
export default async function handler(req,res){
  if(req.method==='OPTIONS'){ setCors(res); return res.status(200).end(); }
  const url=`https://api.simpleswap.io/get_all_currencies?api_key=${encodeURIComponent(process.env.SIMPLESWAP_API_KEY)}`;
  const r=await fetch(url);
  const data=await r.json();
  passThrough(res,r,data);
}
