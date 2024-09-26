import { PriceHighlight, TransactionsContainer } from './styles'

import { Header } from './../../components/Header';
import { Summary } from '../../components/Summary';

export function Transactions() {

return (
  <div>
    <Header />
    <Summary />

    <TransactionsContainer>
      <table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento do site</td>
            <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento do site</td>
            <PriceHighlight variant="outcome">- R$ R$ 59,00</PriceHighlight>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </table>
    </TransactionsContainer>
  </div>
)
}