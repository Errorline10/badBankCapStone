import { BootstrapCard } from '../parts/bootstrapCard';

function Home() {
  return (
    <BootstrapCard
      show={true}
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the bad bank"
      text="this bank has no security, and will probably not store any money."
      body={
        (
          <img
            src="/images/bank-icon.jpg"
            className="img-fluid"
            alt="Bank Icon"
          />
        )}
    />
  );
}

export default Home();
