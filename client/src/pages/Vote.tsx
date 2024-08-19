import Category from "../components/category/category";

export default function Vote() {
    return (
      <div className="bg-gradient-to-b from-emerald-200 to-emerald-600">
        <div className="mb-24">
          <div className="flex justify-center pt-20">
            <span className="bg-black bg-opacity-85 p-6">
              <h1 className="font-Arcade text-white text-6xl">Vote Now</h1>
            </span>
          </div>
          <h3 className="font-Retro text-white text-lg drop-shadow-sm text-center mt-5">Categories may be skipped.</h3>
        </div>
        <Category title="Sample Category" toolTipText="Sample" />
      </div>
    );
  }