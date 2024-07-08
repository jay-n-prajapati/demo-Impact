import BreadCrumb from "../components/common/BreadCrums";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { fields } from "../constants";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { scrollToTop } from "../utils";
import { useEffect } from "react";

const ServiceDetail = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <div className="bg-accentColor">
        <Container>
          <PageHeader title={"Service Details"} />
        </Container>
      </div>
      <BreadCrumb />
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:basis-[35%]">
            <div className="border border-[#dcdcdc] p-8 py-3 flex flex-col gap-4 mb-4">
              {fields.map((field, idx) => (
                <div
                  key={idx}
                  className={`py-2 px-3 border-l-[3px]  ${
                    field?.isActive
                      ? "border-accentColor font-semibold"
                      : "border-[#b2b2b2] font-normal"
                  } hover:border-accentColor hover:cursor-pointer duration-300 `}
                >
                  {field.name}
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">
                Enim qui eos rerum in delectus
              </h1>
              <p>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est.
                Quia aut quam quod facere ut non occaecati ut aut. Nesciunt
                mollitia illum tempore corrupti sed eum reiciendis. Maxime modi
                rerum.
              </p>
            </div>
          </div>
          <div className="lg:basis-[65%]">
            <div className="mb-4">
              <img src="/images/services.jpg" alt="service" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Temporibus et in vero dicta aut eius lidero plastis trand lined
              voluptas dolorem ut voluptas
            </h1>
            <div className="flex flex-col gap-4">
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt.
                Cupiditate non consequatur et doloremque consequuntur.
                Accusantium labore reprehenderit error temporibus saepe
                perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                architecto eum et quos deleniti officia qui.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-accentColor" />
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-accentColor" />
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </li>
                <li className="flex gap-4">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-accentColor" />
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed
                ea illo. Deleniti quam sequi optio iste veniam repellat odit.
                Aut pariatur itaque nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam
                aut consequuntur recusandae mollitia doloremque est architecto
                cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
                repellendus eveniet velit sint quia sapiente cumque. Et ipsa
                perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
                Eaque iusto cupiditate et totam et quia dolorum in. Sunt
                molestiae ipsum at consequatur vero. Architecto ut pariatur
                autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit
                dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetail;
