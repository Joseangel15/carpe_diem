export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        CARPE DIEM <br />
        <span className="text-pink-500 text-4xl text-center">
          Seize the Day
        </span>
      </h1>
      <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded cursor-pointer">
        Dashboard
      </button>
      <p className="mt-4">
        Your one-stop solution for time management and productivity.
      </p>
    </main>
  );
}
