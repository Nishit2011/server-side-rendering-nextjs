import axios from "axios";

const Comments = ({ id, comments }) => {
  // console.log(comments);
  const renderComments = (item, index) => {
    return (
      <div key={index}>
        <li>{item.email} </li>
        <li>{item.body}</li>
      </div>
    );
  };
  return (
    <div>
      <h3>Post:-{id}</h3>
      <ul>
        {comments && comments.length > 0 ? (
          comments.map((item, index) => renderComments(item, index))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

Comments.getInitialProps = async ({ query }) => {
  console.log("helll", query);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;

  return { ...query, comments: data };
};

export default Comments;
