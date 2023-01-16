import React from "react";

function Cards() {
  return (
    <div class=" bg-white mt-20 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
      {/* <!--Card 1--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://m.media-amazon.com/images/I/61aBP5iXrSL._SL1310_.jpg"
          alt="BMW"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">BMW</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      {/* <!--Card 2--> */}
      <div class="rounded overflow-hidden shadow-lg mt-3">
        <img
          class="w-full"
          src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/CamryModelImage.jpg&w=872&h=578&q=75&c=1"
          alt="Toyota"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Toyota</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full mt-2"
          src="https://cdn.pixabay.com/photo/2016/06/20/22/35/mercedes-benz-1470136__340.jpg"
          alt="Mercedes"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mercedes </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      {/* <!--Card 4--> */}
      <div class="rounded overflow-hidden shadow-lg mt-8">
        <img
          class="w-full mt-2"
          src="https://imgd.aeplcdn.com/0x0/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg"
          alt="Honda"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Honda </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      {/* <!--Card 5--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg"
          alt="lamborghini"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Lamborghini </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      {/* <!--Card 6--> */}
      <div class="rounded overflow-hidden shadow-lg mt-2">
        <img
          class="w-full"
          src="https://imgd-ct.aeplcdn.com/1056x660/n/r4gdrsa_1477928.jpg?q=75"
          alt="Jaguar "
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Jaguar </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
