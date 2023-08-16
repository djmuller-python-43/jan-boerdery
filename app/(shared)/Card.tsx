import Link from "next/link";
import React from "react";

type Props = {
  className: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link href="/" className="basis-full hover:opacity-70">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green 
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
            `}
          >
            Blog Title
          </h4>
        </Link>
        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
          <h5 className="font-semibold text-xs">Author</h5>
          <h6 className="text-wh-300 text-xs">Date</h6>
        </div>
        <p className={`text-wh-100 ${isLongForm ? 'line-clamp-5' : 'line-clamp-3'}`}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut accusamus aliquid excepturi quam distinctio voluptate consequuntur, ad id dolorem voluptatum, omnis architecto optio voluptatibus cum? Consequatur nulla et debitis repellendus minus illo beatae natus animi consectetur minima quasi quis ex, obcaecati doloremque eveniet rerum labore, dolor perferendis ducimus, molestiae soluta. Libero eos nam dicta odio cum atque ipsa architecto!
        </p>
      </div>
    </div>
  );
};

export default Card;
