import type { ReactNode } from "react";
import "./story-card.css";

export interface StoryCardProps {
  images: {
    img1: string;
    img2: string;
    img3: string;
  };
  title: string;
  children: ReactNode;
  imagePositon?: "left" | "right";
}

const StoryCard = ({
  images,
  title,
  imagePositon,
  children,
}: StoryCardProps) => {
  return (
    <article className={`story-card ${imagePositon}`}>
      <div className="story-card_img-area">
        <img
          srcSet={`${images.img1} 375w, ${images.img2} 689w, ${images.img3} 676w`}
          sizes="(max-width: 768px) 375px, (max-width: 1023px) 689px, 676px"
          alt="image"
          className="w-full"
        />
      </div>
      <div className="story-card_content">
        <h2 className="text-h2 text-peach">{title}</h2>
        {children}
      </div>
    </article>
  );
};

export default StoryCard;
