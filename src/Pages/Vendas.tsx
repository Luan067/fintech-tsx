import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
  const { data } = useData();
  return (
    <ul>
      {data?.map((venda) => {
        return (
          <li key={venda.id} className={venda.id}>
            <VendaItem venda={venda} />
          </li>
        );
      })}
    </ul>
  );
};

export default Vendas;
