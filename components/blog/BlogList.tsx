import BlogItem from "@/components/blog/BlogItem";
import Message from "@/components/message/Message";

export default async function BlogList() {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postsResponse.json();
    return (
      <div>
        {posts.map((post: any, index: number) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>
    );
  } catch (error) {
    <Message
      message="Error fetching posts. Please try again later."
      type="error"
    />;
  }
}
