import { type ReactElement } from "react";
import type DesignProjectCard from "../design-project-card";

export interface DesignProjectsSectionProps {
  children:
    | ReactElement<typeof DesignProjectCard>
    | ReactElement<typeof DesignProjectCard>[];
}

const DesignProjectsSection = ({ children }: DesignProjectsSectionProps) => {
  return (
    <section className="grid gap-8 my-24 px-6 max-w-lg mx-auto md:max-w-1112 lg:grid-cols-3">
      {children}
    </section>
  );
};

export default DesignProjectsSection;
