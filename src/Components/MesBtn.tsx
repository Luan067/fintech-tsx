import React from "react";
import { useData } from "../Context/DataContext";

function monthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

const btnStyle: React.CSSProperties = {
  padding: "var(--gap-2) var(--gap-1)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap-2)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return <button style={btnStyle} onClick={() => setMonth(n)}>{monthName(n)}</button>;
};

export default MesBtn;
