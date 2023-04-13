import { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { selectStats } from "../slices/dataSlice";
import { useAppSelector } from "../hooks";

const AppTable = (): JSX.Element => {
  const stats = useAppSelector(selectStats);

  useEffect(() => {
    if (Boolean(stats) && stats.length > 0) {
      localStorage.setItem("stats", JSON.stringify(stats));
    }
  }, [stats]);

  return (
    <div className="card p-fluid">
      <DataTable value={stats} showGridlines editMode="cell">
        <Column
          field="date"
          header="Дата"
          style={{ width: "18%" }}
          dataType="date"
          alignHeader="center"
          align="center"
        />
        <Column
          field="oil"
          header="Добыча нефти, т/сут"
          style={{ width: "41%" }}
          alignHeader="center"
          align="right"
        />
        <Column
          field="liquid"
          header="Добыча жидкости, м3/сут"
          style={{ width: "41%" }}
          alignHeader="center"
          align="right"
        />
      </DataTable>
    </div>
  );
};

export default AppTable;
