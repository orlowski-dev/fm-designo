import { LinkButton } from "../components/button";

const NoPage = () => {
  return (
    <div className="text-center space-y-5 p-6">
      <h1 className="text-8xl font-extrabold">404</h1>
      <h2 className="text-h2">Page not found</h2>
      <LinkButton href="/">Go to home page</LinkButton>
    </div>
  );
};

export default NoPage;
