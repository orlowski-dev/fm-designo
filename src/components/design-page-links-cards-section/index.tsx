import type { ReactElement } from "react";
import type { DesignCardLink } from "../landing-page/designs";

export interface DesignPageLinksCardsSectionProps {
  children:
    | ReactElement<typeof DesignCardLink>
    | ReactElement<typeof DesignCardLink>[];
}

const DesignPageLinksCardsSection = ({
  children,
}: DesignPageLinksCardsSectionProps) => {
  return (
    <div className="max-w-1112 mx-auto px-6 my-28">
      <section className="grid gap-6 lg:grid-rows-[308px] lg:grid-cols-2">
        {children}
      </section>
    </div>
  );
};

export default DesignPageLinksCardsSection;
