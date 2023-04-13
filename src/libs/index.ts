import { type Stat } from "../slices/dataSlice";

export const parseContent = (content: string) => {
  const data = content.split("\n").reduce<Stat[]>((acc, row, i) => {
    const [firstValue, secondValue, thirdValue] = row.split("\t");
    const item: Stat = {
      id: String(i),
      date: firstValue,
      oil: secondValue !== "undefined" ? Number(secondValue) : "",
      liquid: thirdValue !== "undefined" ? Number(thirdValue) : "",
    };
    acc.push(item);

    return acc;
  }, []);

  return data;
};
