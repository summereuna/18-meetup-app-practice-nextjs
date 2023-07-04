// 도메인.com/new-meetup/:meetupId
//데이터 필요

import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function meetUpDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;
  //console.log(meetupId);

  //백엔드 API로 요청 보내기
  // meetupId로 밋업 아이템 fetch

  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
      title="test 1"
      address="📍 삶은 여행, 나중에 카카오맵 api 넣어야지"
      description="삶은 여행"
    />
  );
}

//넥스트JS에게 어떤 동적 매개변수 값의 어떤 페이지가 사전 생성되어야 하는지 알려주는 함수
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// 모든 페이지를 실행하는 함수
//모든 meetupId 값으로 데이터를 패치하여 meetupId의 props을 리턴하도록 함
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log("✅", meetupId);

  //fetch data for single meetup

  //일단 하드코딩
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        title: "test 1",
        address: "📍 삶은 여행, 나중에 카카오맵 api 넣어야지",
        description: "삶은 여행",
      },
    },
  };
}
