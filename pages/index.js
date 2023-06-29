// 도메인.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    title: "test 1",
    address: "📍 삶은 여행, 나중에 카카오맵 api 넣어야지",
    description: "삶은 여행",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1617611647086-bccca8c2cf84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "test 2",
    address: "📍 삶은 달걀",
    description: "삶은 달걀",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export function getStaticProps() {
  //fetch data from an API
  return {
    props: { meetups: DUMMY_MEETUPS },
  };
}

export default HomePage;
