"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/index";
import { fetchData } from "@/actions/fetchData";
import { data } from "@/types/index";
import { DataList } from "@/components/index";

const LoadMore = () => {
  const [record, setRecords] = useState<data[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMore = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(5000);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchData(nextPage)) ?? [];
    setRecords((prevProducts: data[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  return (
    <>
      <DataList dataList={record} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
};
export default LoadMore;
