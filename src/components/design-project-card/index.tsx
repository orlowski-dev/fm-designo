export interface DesignProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const DesignProjectCard = ({
  title,
  image,
  description,
}: DesignProjectCardProps) => {
  return (
    <article className="group rounded-xl overflow-hidden md:grid grid-cols-2 lg:grid-cols-1 items-center bg-light-peach bg-opacity-30 hover:bg-peach hover:bg-opacity-100 transition-colors">
      <img
        src={image}
        alt={`${title} project preview image`}
        className="h-auto w-full"
      />
      <div className="text-center p-6 space-y-4 lg:p-8 select-none">
        <h2 className="text-h3 text-peach uppercase group-hover:text-white transition-colors">
          {title}
        </h2>
        <p className="text-body text-dark-grey group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
    </article>
  );
};

export default DesignProjectCard;
