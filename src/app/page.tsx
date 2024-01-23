import React, { useEffect } from "react";
import { fetchData } from "@/actions/fetchData";
import { DataList, LoadMore } from "@/components/index";
const Home = async () => {
  const data = await fetchData(1);

  return (
    <div className="w-full bg-slate-200">
      <main className="container bg-slate-100 mx-auto px-4 py-8 min-h-screen max-w-5xl">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Infinite Scrolling
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <DataList dataList={data} />
          <LoadMore />
        </div>
      </main>
    </div>
  );
};
export default Home;
