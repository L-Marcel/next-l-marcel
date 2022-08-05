import { Button } from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col h-full min-h-screen flex-1 gap-4 justify-center items-center">
      <h1 className="font-sans text-3xl">Hello world!</h1>
      <Button>Test</Button>
    </div>
  );
}

export default Home;