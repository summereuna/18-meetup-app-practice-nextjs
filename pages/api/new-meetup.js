// /api/new-meetup
// POST  /api/new-meetup

function handler(req, res) {
  //요청이 POST인 경우만 실행
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    //이 네 가지 필드를 요청 바디에서 받아서 데이터 베이스(=> ✅ mongoDB)에 저장하기
  }
}

export default handler;
