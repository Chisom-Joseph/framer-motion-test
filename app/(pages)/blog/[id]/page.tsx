import Message from "@/components/message/Message";

export default async function BlogPost({ params }: { params: { id: string } }) {
  try {
    const postData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await postData.json();
    return (
      <div className="max-w-[60em] mx-auto grid grid-cols-2 gap-10">
        <h1 className="text-4xl uppercase tracking-tighter sticky top-0 font-bold text-purple-500 h-fit">
          {post.title}
        </h1>
        <div className="text-lg font-bold text-gray-700">{post.body}</div>
      </div>
    );
  } catch (error) {
    return <Message type="error" message="Error loading blog post" />;
  }
}
