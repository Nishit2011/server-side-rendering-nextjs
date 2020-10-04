import Link from "next/link";
import axios from "axios";

const Index = (props) => {
  const renderPosts = (item, index) => {
    //console.log("Index Page", item);
    return (
      <li key={index}>
        <Link href={`/comments?id=${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    );
  };
  return (
    <div>
      <ul>
        {props.posts && props.posts.length > 0 ? (
          props.posts.map((item, index) => renderPosts(item, index))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;
