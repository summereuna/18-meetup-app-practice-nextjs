// 도메인.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function newMeetupPage() {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
    //백엔드에 넘기기
  };
  return (
    <>
      <h1>newMeetupPage</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
