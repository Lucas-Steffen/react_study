import { HistoryContainer, HistoryList, Status } from "./styles";

export function History(){
    return(
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>25 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa 2</td>
                            <td>15 minutos</td>
                            <td>Há 1 mês</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa 3</td>
                            <td>30 minutos</td>
                            <td>Há 3 dias</td>
                            <td>
                                <Status statusColor="red">Interrompido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa 4</td>
                            <td>45 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa 5</td>
                            <td>20 minutos</td>
                            <td>Há 10 minutos</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa 6</td>
                            <td>10 minutos</td>
                            <td>Há 5 minutos</td>
                            <td>
                                <Status statusColor="red">Interrompido</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}