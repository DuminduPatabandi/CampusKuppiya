import { Need } from "../components";


const Video = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  return (

    <div className="user">
      {currentUser ? (
      <div>Video</div>
      ) : (
        <>
        <Need/>
        </>
      )}
    </div>
  );
};

export default Video;

