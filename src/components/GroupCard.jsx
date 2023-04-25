import React from "react";

function GroupCard() {
  return (
    <div className="bg-white rounded-lg shadow-md w-1/4 px-2 m-4">
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          NodeJS
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 px-5 py-3 text-justify line-clamp-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit aut nisi laudantium autem praesentium fugiat ipsum,
          incidunt alias neque. Cupiditate ea dicta illo voluptates eligendi
          earum, hic quod mollitia voluptatum! Dolorum enim quo harum id
          voluptate, dolores sapiente corporis debitis alias voluptatibus quidem
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perspiciatis laboriosam nobis amet unde debitis adipisci eveniet quasi quam voluptatum officiis modi, ex deleniti nesciunt enim illum, earum voluptate minus.
          Facere repudiandae pariatur rem accusamus. Iusto, praesentium cum ipsam, aliquid consequatur incidunt voluptatum, enim laborum blanditiis repudiandae vitae inventore? Provident consequatur rem, dolores vero enim facilis temporibus quia beatae iure!
          Recusandae, aperiam illum culpa maiores deleniti nam animi officia temporibus molestiae quia fuga similique ipsam esse accusantium nemo quisquam! Quidem adipisci et in debitis laborum recusandae eius fuga praesentium dolores.
          Modi explicabo voluptate, est aliquid ad porro at totam fuga facilis culpa temporibus, reiciendis tempora sapiente corrupti dolore quis expedita fugit beatae iure dicta tempore perferendis itaque? Culpa, odio quas!
          Sapiente ullam, nostrum ipsa quas modi nobis repellendus recusandae consectetur fuga atque! Incidunt temporibus hic reprehenderit, a quod eum aperiam! Exercitationem, et aliquid. Veniam tempora hic autem assumenda modi facilis!
          
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Posts
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
