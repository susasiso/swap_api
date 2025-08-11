export function setCors(res) {
  const origin = process.env.ALLOWED_ORIGIN || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
export function passThrough(res, r, data){
  setCors(res);
  try{ res.status(r.status).json(data); }catch{ res.status(500).json({ok:false,message:'proxy_error'}); }
}
