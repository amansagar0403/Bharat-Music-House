import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import styles from "./page.module.css";
import { Button, Grid, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { useNavigate } from "react-router-dom";
  
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://rvb-img.reverb.com/image/upload/s--PJfsOn5---/f_auto,t_large/v1527152274/wxiwcercroxifrwxjbcy.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectDetails() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="pt-6">
        <div className={styles.productview}>
          <div className={styles.rating}>
            <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-10 ">
              {/* Image gallery */}
              <div className="flex flex-col items-center object-contain">
                {product.images.map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-lg mb-4 lg:mb-0"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
              {/* Product info */}
              <div className="max-w-full px-4 pb-16 sm:px-6 lg:pb-24">
                <div>
                  <h1 className="text-lg lg:text-xl font-semibold text-white">
                    Cort
                  </h1>
                  <h1 className="text-lg lg:text-xl text-white opacity-60 pt-1">
                    Cort G-100 Open Pore Walnut Electric Guitar
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <div className="flex space-x-5 items-center text-lg lg:text-xl mt-6 text-white">
                    <p className="font-semibold">199</p>
                    <p className="opacity-60 line-through">200</p>
                    <p className="text-green-500 font-semibold">5% off</p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-6">
                    <div className="flex items-center space-x-3">
                      <p className="opacity-50 text-sm text-white">
                        565 Ratings
                      </p>
                      <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        23949 Reviews
                      </p>
                    </div>
                  </div>

                  <form className="mt-10">
                    <button
                      onClick={handleAddToCart}
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Add to bag
                    </button>
                  </form>
                </div>

                <div className="py-10 pb-16 pr-8 pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-white">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-white">
                      Highlights
                    </h3>
                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-white">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-white">Details</h2>
                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-white">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.productview}>
          <section className={styles.rating}>
            <h1 className="font-semibold text-2xl pb-4 text-white bg-transparent">
              Reviews
            </h1>
            <div>
              <div>
                <div className="bg-transparent">
                  <div className=" gap-5 flex flex-wrap">
                    {[1, 1, 1].map((item) => (
                      <ProductReviewCard key={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
