import React from "react";

function CommunityPost() {
  return (
    <div className="my-12 bg-white mx-5 p-5 rounded-lg shadow-md w-5/12">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png"
        />
        <div className="mx-4">
          <div className="font-semibold text-base">Node Js</div>
          <div className="font-medium text-xs">Jan 5, 2023</div>
        </div>
      </div>
      <img src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-color-open-book-stack-books-png-image_5836804.png" />
      <div>
        We are trying to build a platform better than twitter and we don't even
        charge $8. So lets go
      </div>
    </div>
  );
}

export default CommunityPost;
