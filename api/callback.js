export default function handler(req, res) {  
  try {  
    // SeaTalk gửi body dạng JSON, ví dụ:  
    // { "seatalk_challenge": "xxxx" }  
    const challenge = req.body?.seatalk_challenge;  
  
    // Nếu có seatalk_challenge thì trả lại nguyên  
    if (challenge) {  
      return res.status(200).json({ seatalk_challenge: challenge });  
    }  
  
    // Nếu không phải request verify  
    return res.status(200).json({ ok: true });  
  
  } catch (e) {  
    return res.status(200).json({ error: "server_error" });  
  }  
}
