import BlogList from "@/components/blog/BlogList";

export default async function BlogPage() {
  return (
    <div className="max-w-[60em] mx-auto grid grid-cols-2 gap-10">
      <h1 className="text-[12em] leading-58 sticky top-0 font-bold text-purple-500 h-fit pt-10">
        Blog
        <br />
        Page
      </h1>
      <BlogList />
    </div>
  );
}
