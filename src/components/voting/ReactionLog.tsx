import React from 'react';
import EmojiIcons from '../ui/EmojiIcon';


interface Props {
  imageId: string;
  icon: string;
}

const ReactionLog: React.FC<Props> = (props) => {
  const { imageId, icon } = props;

  return (
    <div className="flex mt-2 flex-wrap md:flex-nowrap justify-between gap-x-5 w-full bg-grey-pry dark:bg-white/5 px-5 h-[118px] md:h-[60px] rounded-10 items-center">
      {/* timestamp */}
      <div className="w-[61px] text-center py-1 bg-white dark:bg-pry-dark dark:text-white text-pry-dark rounded-md">
        12: 31
      </div>

      <div className="w-full order-3 md:order-none md:max-w-[450px]">
        <p className="text-grey">Image ID: <span className="text-pry-dark font-medium dark:text-white">{imageId}</span> was added to {icon === 'like' ? 'Favourites' : icon === 'favorite' ? 'Likes' : 'Dislikes'}</p>
      </div>

      <div className={`order-2 md:order-none ${icon === 'like' ? 'text-breed' : icon === 'favorite' ? 'text-accent' : 'text-gallery'}`}>
        <EmojiIcons name={icon} />
      </div>
    </div>
  );
}

export default ReactionLog;
