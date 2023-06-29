// 도메인.com/new-meetup/:meetupId
import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function meetUpDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;

  //백엔드 API로 요청 보내기
  // meetupId로 밋업 아이템 fetch

  console.log(meetupId);
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
      title="test 1"
      address="📍 삶은 여행, 나중에 카카오맵 api 넣어야지"
      description="삶은 여행"
    />
  );
}
