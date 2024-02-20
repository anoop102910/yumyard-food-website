import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Icon } from "@iconify-icon/react";
const items = [
  { imgSrc: "cat1.webp", label: "Sides" },
  { imgSrc: "cat2.webp", label: "Chocolate" },
  { imgSrc: "cat3.webp", label: "Breakfast" },
  { imgSrc: "cat4.webp", label: "Dish" },
  { imgSrc: "cat1.webp", label: "Sides" },
  { imgSrc: "cat2.webp", label: "Sides" },
  { imgSrc: "cat3.webp", label: "Sides" },
  { imgSrc: "cat4.webp", label: "Sides" },
  { imgSrc: "cat1.webp", label: "Sides" },
  { imgSrc: "cat2.webp", label: "Sides" },
  { imgSrc: "cat3.webp", label: "Sides" },
  { imgSrc: "cat4.webp", label: "Sides" },
];

const dishes = [
  {
    imgSrc: "dish3.webp",
    title: "SPAGHETTI BOLOGNESE",
    price: "Rs 330",
    rating: 5,
  },
  {
    imgSrc: "dish4.webp",
    title: "Vegetable Biryani",
    price: "Rs 330",
    rating: 5,
  },
  {
    imgSrc: "dish5.webp",
    title: "Mushroom Risotto",
    price: "Rs 400",
    rating: 5,
  },
  {
    imgSrc: "dish6.webp",
    title: "Pasta Primavera",
    price: "Rs 550",
    rating: 5,
  },
  {
    imgSrc: "dish7.webp",
    title: "Palak Paneer",
    price: "Rs 230",
    rating: 5,
  },
  {
    imgSrc: "dish8.webp",
    title: "Hummus with Pita Bread",
    price: "Rs 328",
    rating: 5,
  },
 
];

const infoBlocks = [
  {
    imageSrc: "health.webp",
    title: "Serve Healthy Food",
    description: "We specialize in serving nutritious.",
  },
  {
    imageSrc: "quality.webp",
    title: "Best Quality",
    description: "We serve the best quality food in the market.",
  },
  {
    imageSrc: "delivery.webp",
    title: "Fast Delivery",
    description: "We prioritize swift delivery, promoting nutritious fare.",
  },
];

const navItems = ["Home", "About", "Contact Us", "Buy Now"];

function App() {
  return (
    <>
      <div className="w-full bg-gray font-urbanist text-slate-200 overflow-hidden">
        <header
          role="banner"
          className="flex bg-black justify-between rounded-b-2xl px-10 items-center mx-auto lg:w-[80%] md:w-[90%] max-sm:px-4"
        >
          <img className="w-16" src="logo.webp" alt="company logo" />
          <nav aria-label="Main Navigation" className="max-sm:hidden">
            <ul className="flex justify-between items-center text-white  gap-10 focus-within:outline-1 focus-within:outline-white focus-within:p-2 ">
              {navItems.map((item, index) => (
                <li className="hover:text-slate-200  " key={index}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4 ">
            <Icon className="text-white cursor-pointer text-2xl " icon="ion:cart" />
            <Icon icon="solar:hamburger-menu-outline" className="text-white text-3xl sm:hidden" />
          </div>
        </header>

        <main>
          <div className="wrapper  lg:w-[80%] md:w-[90%]  max-sm:px-4   mx-auto pb-20">
            <section
              id="hero"
              role="main section"
              className="flex max-md:flex-col max-lg:items-center max-lg:gap-20 flex-1 md:mt-20"
            >
              <div className="flex-1 mt-20 max-lg:max-w-lg">
                <h1 className="text-5xl md:text-6xl  font-bold">
                  Savor the <span className=" text-orange">Essence</span> of{" "}
                  <span className="text-orange">Culinary</span> Mastery
                </h1>
                <p className="md:text-lg mt-10">
                  At our establishment, we prioritize excellence in every dish. From the first bite
                  to the last, our menu ensures satisfaction. Join us for a flavorful journey."
                </p>
                <div className="mt-6 flex gap-6">
                  <button className="px-4 py-2 bg-green rounded-lg text-white focus:outline-none focus:ring focus:border-green">
                    Order Now
                  </button>
                  <button className="px-4 py-2 border border-green  rounded-lg  focus:outline-none focus:ring focus:border-green">
                    View More
                  </button>
                </div>
              </div> 
              <div className="flex-1">
                <img
                  className="w-full max-sm:mt-10 md:max-w-[24rem] sm:max-w-sm rounded-2xl ml-auto"
                  src="hero.webp"
                  alt="Young lady eating delicious food"
                />
              </div>
            </section>

            <section aria-description="Popular Catergories" className="mt-20 md:mt-40">
              <h2 className="text-5xl  text-center font-medium">Popular Catergories</h2>
              <div role="Category item" className=" mt-20  md:mt-32  ">
                <Carousel
                  opts={{
                    align: "center",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {items.map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/3  lg:basis-1/4">
                        <div className="mx-auto w-max">
                          <div className="rounded-full w-[12.5rem] h-[12.5rem] shadow-md relative bg-white text-center">
                            <img
                              className="w-[9rem] mx-auto"
                              src={item.imgSrc}
                              alt={`Catergory : ${item.label}`}
                            />
                            <p className="font-bold">{item.label}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>

            <section aria-description="dishes" className="mt-20 md:mt-40 ">
              <h2 className="text-5xl text-center font-medium">Discover Our Delectable Menu</h2>
              <div className="mt-20 md:mt-32">
                <Carousel
                  opts={{
                    align: "center",
                  }}
                  className="w-full  "
                >
                  <CarouselContent>
                    {dishes.map((dish, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  mt-20">
                        <div className="relative rounded-2xl w-64  bg-white flex mx-auto">
                          <img
                            className="w-[12rem] absolute -top-20 -left-16"
                            src={dish.imgSrc}
                            alt=""
                          />

                          <div className="p-6 relative">
                            <Icon
                              tabIndex={0}
                              className="absolute right-6 top-6 text-2xl text-orange"
                              icon="mdi:heart-outline"
                            />
                            <div className="mt-24 ">
                              <h3 className="text-lg font-semibold uppercase">{dish.title}</h3>
                              <span className="inline-block mt-3">{dish.price}</span>
                              <div className="flex justify-between">
                                <div className="flex gap-1 mt-4">
                                  {[...Array(dish.rating)].map((_, i) => (
                                    <Icon
                                      key={i}
                                      className="text-orange text-2xl"
                                      icon="ic:round-star"
                                    />
                                  ))}
                                </div>
                                <div
                                  role="cart"
                                  className="w-10 h-10 rounded-full bg-black flex justify-center items-center"
                                >
                                  <Icon
                                    tabIndex={0}
                                    className="text-white text-2xl"
                                    icon="ion:cart"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="px-4 py-2 border border-green  rounded-lg  hover:bg-green-300 mt-10 w-max flex justify-between items-center gap-2">
                <button className=" text-slate-900 ">View More</button>
                <Icon className="text-xl text-slate-900" icon="mingcute:arrow-right-line" />
              </div>
            </section>

            <section aria-description="our story" className="mt-40">
              <h2 className="text-5xl  font-medium max-sm:text-center">Our Story: Passion for Food</h2>
              <div className="wrapper mt-32">
                <div className="w-full p-10 relative bg-orange rounded-2xl">
                  <img
                    className="w-64 absolute right-10 -top-32 -rotate-6 "
                    src="dish.webp"
                    alt="image of a delicious ratataouille dish"
                  />
                  <div className="md:w-[600px] text-white mt-8">
                    <h2 className="text-2xl ">Rooted in Tradition, Inspired by Innovation</h2>
                    <p className="mt-4">
                      Embark on a culinary odyssey with us. Our story is one of relentless
                      dedication to flavor, innovation, and unforgettable experiences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-description="testimonials" className="mt-20 md:mt-40">
              <h2 className="text-5xl text-center  font-medium">Testimonials</h2>
              <div className="flex max-lg:flex-col max-lg:items-center mt-20 md:mt-32">
                <div className="flex-1">
                  <img
                    className="w-full md:max-w-[24rem] sm:max-w-sm rounded-2xl"
                    src="guest.webp"
                    alt="guest eating delicious food"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mt-20 leading-normal tracking-wide">
                    Hear What Our Guests Have to Say
                  </h2>
                  <div className="mt-20 md:ml-10 ">
                    <div className="relative  mx-auto ">
                      <img src="icecream.webp" className="absolute -top-6 -left-8 w-16 z-10" />
                      <div className=" p-6 absolute bg-green top-2 left-0 py-10  -rotate-[4] ring-1 ring-white rounded-tr-3xl rounded-bl-3xl max-w-[24rem] text-white">
                        <h3 className="font-bold">
                          “YardYum has left an indelible mark on my palate. Every dish is a
                          masterpiece”
                        </h3>
                      </div>
                      <div className="p-6 py-10 rotate-3 bg-[#CA4C34] ring-1 ring-white rounded-tr-3xl rounded-bl-3xl max-w-[24rem]  text-white">
                        <h3 className="font-bold">
                          “YardYum has left an indelible mark on my palate. Every dish is a
                          masterpiece”
                        </h3>
                      </div>

                      <div>
                        <img
                          src="profile.webp"
                          className="absolute -bottom-10 right-0 w-16 z-[4] rounded-full ring-2 ring-white "
                        />
                        <img
                          src="profile.webp"
                          className="absolute -bottom-10 right-4 w-16 z-[2] rounded-full ring-2 ring-white"
                        />
                        <img
                          src="profile.webp"
                          className="absolute -bottom-10 right-8 w-16 z-[1] rounded-full ring-2 ring-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section aria-description="why choose us" className="mt-40">
              <h2 className="text-5xl text-center  font-medium">Why Choose Us</h2>
              <div className="flex max-sm:flex-col justify-between flex-wrap   gap-6 text-center mt-32">
                {infoBlocks.map((block, index) => (
                  <div key={index} className="bg-white p-6 rounded-3xl flex-1">
                    <img src={block.imageSrc} className="w-40 mx-auto" alt={block.title} />
                    <h3 className="text-xl font-semibold mt-4">{block.title}</h3>
                    <p className="mt-2">{`"${block.description}"`}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-40 relative max-sm:hidden ">
              <h2 className="text-5xl text-center  font-medium">Our Chefs</h2>
              <div className="w-[60%]  mt-32">
                <div className="flex justify-between  gap-6">
                  <img src="chef.webp" className="w-[26rem] rounded-2xl" alt="" />
                  <img
                    src="chef.webp"
                    className="w-[11rem] hover:w-[26rem] transition-all duration-150 object-cover object-center rounded-2xl"
                    alt="chef"
                  />
                </div>
                <div className="flex h-[20rem] mt-6 justify-between  gap-6">
                  <img
                    src="chef.webp"
                    className="w-[11rem] hover:w-[26rem] transition-all duration-150   object-cover object-center rounded-2xl"
                    alt="chef"
                  />
                  <img
                    src="chef.webp"
                    className="w-[11rem] hover:w-[26rem] transition-all duration-150 object-cover object-center rounded-2xl"
                    alt="chef"
                  />
                  <img
                    src="chef.webp"
                    className="w-[11rem] hover:w-[26rem] transition-all duration-150 object-cover object-center rounded-2xl"
                    alt="chef"
                  />
                </div>
              </div>
              <span className="max-lg:hidden absolute top-80  text-7xl -right-80 rotate-[270deg] font-bold text-orange bg-transparent  ">
                Meet Our Culinary Creators
              </span>
            </section>
          </div>
        </main>

        <footer className="w-[80%] mx-auto pb-40">
          <div className="flex justify-between flex-wrap max-sm:flex-col gap-6">
            <div>
              <img src="footlogo.webp" width={100} alt="" />
              <p className="w-48">Savor the artistry where every dish is a culinary masterpiece</p>
            </div>
            <div>
              <span className="text-lg font-bold">Useful link</span>
              <ul className="mt-8 space-y-3 text-slate-700 ">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            <div>
              <span className="text-lg font-bold">Useful link</span>
              <ul className="mt-8 space-y-3 text-slate-700 ">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            <div>
              <span className="text-lg font-bold">Useful link</span>
              <ul className="mt-8 space-y-3 text-slate-700 ">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex max-sm:flex-col gap-6 md:justify-between md:items-center mt-8">
              <div className="flex gap-4 mt-6">
                <Icon
                  className="text-2xl rounded-full bg-white p-2 hover:bg-orange hover:text-white transition-all duration-150"
                  icon="iconoir:facebook"
                />
                <Icon
                  className="text-2xl rounded-full bg-white p-2 hover:bg-orange hover:text-white transition-all duration-150"
                  icon="bi:instagram"
                />
                <Icon
                  className="text-2xl rounded-full bg-white p-2 hover:bg-orange hover:text-white transition-all duration-150"
                  icon="ri:twitter-line"
                />
                <Icon
                  className="text-2xl rounded-full bg-white p-2 hover:bg-orange hover:text-white transition-all duration-150"
                  icon="iconoir:youtube"
                />
              </div>
              <div>
                <p> Copyright 2023 Dscode | All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
