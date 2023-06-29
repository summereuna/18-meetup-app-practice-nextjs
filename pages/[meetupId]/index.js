// 도메인.com/new-meetup/:meetupId
import { useRouter } from "next/router";

export default function meetUpDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;

  //백엔드 API로 요청 보내기
  // meetupId로 밋업 아이템 fetch

  console.log(meetupId);
  return (
    <>
      <h1>meetUpDetailPage</h1>
    </>
  );
}
