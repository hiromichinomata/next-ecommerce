import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductImages from "../components/ProductImage";
import CustomizeProducts from "../components/CustomizeProducts";

const SinglePage = async ({ params }: { params: { slug: string } }) => {

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">Product Description</p>
        <div className="h-[2px] bg-gray-100" />
        <h2 className="font-medium text-2xl">$11</h2>
        <div className="h-[2px] bg-gray-100" />
          <CustomizeProducts/>
          <div className="h-[2px] bg-gray-100" />
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
      </div>
    </div>
  );
};

export default SinglePage;
