import React, { useEffect } from "react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import BreadCrumb from "../components/common/BreadCrums";
import { IoSearchOutline } from "react-icons/io5";
import { BlogCardItems, categories, tags } from "../constants";
import { CiUser } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa6";
import { BsFolder2, BsTags } from "react-icons/bs";
import { scrollToTop } from "../utils";
import Button from "../components/common/Button";

const BlogDetail = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <div className="bg-accentColor">
        <Container>
          <PageHeader title={"Blog Details"} />
        </Container>
      </div>
      <BreadCrumb />
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:basis-[80%]">
            <div className="flex flex-col gap-8">
              <div>
                <img src="/images/blog1.jpg" alt="img" />
              </div>
              <div className="shadow-md px-6 pb-6 flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl font-bold">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </h2>
                </div>
                <div className="flex justify-between text-[12px] sm:text-base sm:justify-normal sm:gap-6">
                  <div className="flex items-center gap-1 text-[#575757]">
                    <CiUser className="text-md" />
                    <p>John Doe</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#575757]">
                    <GoClock className="text-md" />
                    <p>Jan 1, 2024</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#575757]">
                    <FaRegCommentDots className="text-md" />
                    <p>John Doe</p>
                  </div>
                </div>
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>
                <p>
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                  reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
                  numquam nihil cumque odio. Et voluptate cupiditate.
                </p>
                <blockquote className="p-16 text-xl font-semibold italic text-center bg-[#F4F4F4] relative  before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[80%] before:bg-accentColor before:w-[3px]">
                  Et vero doloremque tempore voluptatem ratione vel aut.
                  Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem
                  quos.
                </blockquote>
                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                  dicta inventore tempore provident voluptas mollitia aliquid.
                  Id repellendus quia. Asperiores nihil magni dicta est suscipit
                  perspiciatis. Voluptate ex rerum assumenda dolores nihil
                  quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                  at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                  exercitationem harum qui qui blanditiis neque. Iusto autem
                  itaque. Repudiandae hic quae aspernatur ea neque qui.
                  Architecto voluptatem magni. Vel magnam quod et tempora
                  deleniti error rerum nihil tempora.
                </p>
                <div>
                  <h2 className="font-bold text-2xl mb-2">
                    Et quae iure vel ut odit alias.
                  </h2>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                    in qui quos fugit ut rerum atque. Optio provident dolores
                    atque voluptatem rem excepturi molestiae qui. Voluptatem
                    laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                    Voluptatum est libero eum nesciunt aliquid qui. Quia et
                    suscipit non sequi. Maxime sed odit. Beatae nesciunt
                    nesciunt accusamus quia aut ratione aspernatur dolor. Sint
                    harum eveniet dicta exercitationem minima. Exercitationem
                    omnis asperiores natus aperiam dolor consequatur id ex sed.
                    Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                    minima sunt libero soluta sapiente in rem assumenda. Et qui
                    odit voluptatem. Cum quibusdam voluptatem voluptatem
                    accusamus mollitia aut atque aut.
                  </p>
                </div>
                <div>
                  <img src="/images/blog-inside-post.jpg" alt="img" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl mb-2">
                    Ut repellat blanditiis est dolore sunt dolorum quae.
                  </h2>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                    porro amet nostrum. In assumenda quia quae a id praesentium.
                    Quos deleniti libero sed occaecati aut porro autem.
                    Consectetur sed excepturi sint non placeat quia repellat
                    incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores
                    eaque aut. Explicabo omnis quibusdam esse. Ex libero illum
                    iusto totam et ut aut blanditiis. Veritatis numquam ut illum
                    ut a quam vitae.
                  </p>
                </div>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                  enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                  nisi asperiores est veniam.
                </p>
                <div className="pt-4 border-t border-[#b2b2b282] flex gap-4">
                  <div className="flex items-center gap-2 text-[#575757]">
                    <BsFolder2 />
                    <p>Business</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#575757]">
                    <BsTags />
                    <p>Creative, Tips, Marketing</p>
                  </div>
                </div>
              </div>
              <div className="shadow-xl p-7 grid gap-4 grid-cols-12 my-10 font-opensans">
                <div className="col-span-12 ">
                  <h3 className="text-2xl font-montserrat-bold">
                    Post Comment
                  </h3>

                  <p className="text-default text-sm pt-1">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="col-span-6 py-3 px-4 text-sm border border-gray-300 rounded duration-300 focus:border-accent focus:outline-0"
                />
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="col-span-6 py-3 px-4 text-sm border border-gray-300 rounded duration-300 focus:border-accent focus:outline-0"
                />

                <input
                  type="text"
                  placeholder="Your Website *"
                  className="col-span-12 py-3 px-4 text-sm border border-gray-300 rounded duration-300 focus:border-accent focus:outline-0"
                />

                <textarea
                  placeholder="Your Comment *"
                  className="col-span-12 pt-3 pb-24 px-4 text-sm border border-gray-300 rounded duration-300 focus:border-accent focus:outline-0"
                ></textarea>
                <div className="col-span-12 text-center">
                  <Button
                    className={"rounded-md text-white hover:bg-[#169485]"}
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-[20%]">
            <div className="shadow-md p-6 py-8 flex flex-col gap-8 max-h-fit">
              <div>
                <h3 className="text-xl mb-4 font-semibold">Search</h3>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="border border-[#b2b2b2] px-4 py-2  outline-none"
                  />
                  <button className="bg-accentColor hover:bg-[] text-white p-[11px] rounded-tr-sm rounded-br-sm">
                    <IoSearchOutline className="text-xl" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-3 font-semibold">Categories</h3>
                <div className="flex flex-col gap-3">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <p className="text-[#575757] hover:text-accentColor cursor-pointer">
                        {cat.name}
                      </p>
                      <p className="text-[#b2b2b2]">({cat.item})</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-3 font-semibold">
                  Recent Blog Posts
                </h3>

                <div className="flex flex-col">
                  {BlogCardItems.map((blogCardItem) => {
                    return (
                      <div key={blogCardItem.src} className="flex gap-5 mb-3">
                        <img
                          src={blogCardItem.src}
                          alt={blogCardItem.title}
                          className="w-[80px]"
                        />
                        <div>
                          <h4 className="font-bold text-default duration-300 hover:text-accent mb-[5px] cursor-pointer">
                            {blogCardItem.title}
                          </h4>
                          <p className="italic text-default opacity-80 text-sm">
                            {blogCardItem.publishedAt}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4 font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="border border-[#575757] text-[#575757] px-4 py-1 hover:bg-accentColor hover:text-white duration-300 cursor-pointer"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetail;
