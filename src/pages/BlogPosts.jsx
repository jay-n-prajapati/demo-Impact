import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { blogs } from "../constants";

const BlogPosts = () => {
  return (
    <div id="blogs">
      <Container>
        <SectionHeader title={"Recent Blog Posts"} />
        <div
          className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-up"
        >
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="shadow-[0px_0px_29px_0px_#0000001a] rounded-xl overflow-hidden"
            >
              <div className="h-56">
                <img
                  src={blog.blogImg}
                  alt="blog"
                  className="size-full object-cover"
                />
              </div>
              <div className="p-4 pb-6 px-6 flex flex-col gap-4">
                <div>
                  <p className="text-sm text-[#b2b2b2]">{blog.category}</p>
                  <Link
                    to={"/blog-detail"}
                    className="text-xl font-semibold hover:text-accentColor duration-300"
                  >
                    {blog.title}
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full overflow-hidden">
                    <img
                      src={blog.authorImg}
                      alt="author"
                      className="size-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{blog.author}</h3>
                    <p className="text-[#b2b2b2]">{blog.published}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPosts;
