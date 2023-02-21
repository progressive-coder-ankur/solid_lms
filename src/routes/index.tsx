import "../assets/index.css";

export default function Home() {
  return (
      <main class='w-full mx-auto'>
        <div class="flex flex-no-wrap">

            {/* Remove class [ h-64 ] when adding a card block */}
            <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div class="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
            </div>
        </div>
    </main>
  );
}
