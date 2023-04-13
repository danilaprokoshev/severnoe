import { type ClipboardEvent, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // flex
import "./App.css";

import { useAppDispatch, useAppSelector } from "./hooks";
import {
  getStats,
  setStats,
  selectLoadingStatus,
  selectErrorMessage,
} from "./slices/dataSlice";
import AppTable from "./components/AppTable";
import AppButton from "./components/AppButton";
import { parseContent } from "./libs";

const App = (): JSX.Element => {
  const toast = useRef<Toast>(null);

  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoadingStatus);
  const errorMessage = useAppSelector(selectErrorMessage);

  const handleClipboardEvent = (e: ClipboardEvent<HTMLInputElement>) => {
    const pasteContent = e.clipboardData.getData("Text");
    const parsedContent = parseContent(pasteContent);

    dispatch(setStats(parsedContent));
  };

  const handleFetchData = async () => await dispatch(getStats());

  const handlePasteFromClipboard = async () => {
    try {
      const pasteContent = await navigator.clipboard.readText();
      const parsedContent = parseContent(pasteContent);

      dispatch(setStats(parsedContent));
    } catch (error) {
      console.log(error);
    }
  };

  const cleatData = () => {
    localStorage.removeItem("stats");
    dispatch(setStats([]));
  };

  useEffect(() => {
    if (loading === "failed") {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorMessage,
        life: 3000,
      });
    }
  }, [loading]);

  return (
    <div className="App" onPaste={handleClipboardEvent}>
      <h1>
        Суточная динамика добычи нефти и воды на месторождении «Северное» за
        период 01 - 31 января 2023 г.
      </h1>
      <div className="card">
        <div className="buttonRow">
          <div className="buttonGroup">
            <AppButton
              label="Запросить данные"
              onClick={handleFetchData}
              loading={loading === "loading"}
            />
            <AppButton
              label="Скопировать из буфера обмена"
              onClick={handlePasteFromClipboard}
            />
          </div>
          <AppButton
            className="p-button-danger"
            label="Очистить данные"
            onClick={cleatData}
          />
        </div>
      </div>
      <AppTable />
      <Toast ref={toast} />
    </div>
  );
};

export default App;
