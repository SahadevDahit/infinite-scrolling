import React from "react";
import { data } from "@/types/index";
import { Card } from "@/components/index";
interface DataListProps {
  dataList: data[] | null;
}
const DataList: React.FC<DataListProps> = ({ dataList }) => {
  return (
    <>
      {dataList?.map((record) => {
        return (
          <div key={record?.id}>
            <Card
              id={record?.id}
              name={record?.name}
              tagline={record?.tagline}
              image_url={record?.image_url}
            />
          </div>
        );
      })}
    </>
  );
};

export default DataList;
