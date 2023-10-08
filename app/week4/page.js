import NewItem from './new-item';

function Page() {
  return (
    <div className="bg-black-100 min-h-screen py-8">
      <h1 className="text-2xl text-center mb-6">Add New Item</h1>
      <NewItem />
    </div>
  );
}

export default Page;
