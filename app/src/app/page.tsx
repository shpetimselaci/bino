import Heading from "@/components/h1/heading";
import Typography from "@/components/Typography/Typography";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="space-y-[var(--spacing-large)]">
        <div className="space-x-[var(--spacing-medium)]">
          <Heading variant="h1">Albin Izmaku</Heading>
          <Heading variant="h3">Albin Izmaku</Heading>
          <Heading variant="h4">Albin Izmaku</Heading>
          <Heading variant="p">Albin Izmaku</Heading>
        </div>
      </div>
    </div>
  );
};

export default Home;
