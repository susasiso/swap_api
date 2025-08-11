import { setCors, passThrough } from '../utils/common.js';
export default async function handler(req,res){
  if(req.method==='OPTIONS'){ setCors(res); return res.status(200).end(); }
  if(req.method!=='POST'){ setCors(res); return res.status(405).json({ok:false,message:'Method not allowed'}); }
  const payload={
    currency_from:req.body.from, currency_to:req.body.to, amount:String(req.body.amount),
    address_to:req.body.address, address_from:req.body.refund, rate_type:req.body.rateType||'floating',
    extra_id_to:req.body.extraTo||'', extra_id_from:req.body.extraRefund||''
  };
  const url=`https://api.simpleswap.io/create_exchange?api_key=${encodeURIComponent(process.env.SIMPLESWAP_API_KEY)}`;
  const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
  const data=await r.json();
  passThrough(res,r,data);
}
