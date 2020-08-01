import React from 'react'
import * as Styled from '../styles/history.styled';

function History() {
    let history = JSON.parse(localStorage.getItem('history'));
    return (
        <Styled.History>
            <Styled.Content>
                {Object.keys(history).map((key) => {
                    if(history[key].length > 0) {
                    return (<>
                        <Styled.Title>{history[key][0].name}</Styled.Title>
                        <Styled.Heading>
                            <Styled.Title>from</Styled.Title>
                            <Styled.Title>to</Styled.Title>
                        </Styled.Heading>
                        {history[key].map(record => {
                            return (<>
                                <Styled.Record>
                                <Styled.Cell>
                                    <Styled.Value>
                                        {record.fromValue}
                                    </Styled.Value>
                                    <Styled.Unit>
                                        {record.fromUnit}
                                    </Styled.Unit>
                                </Styled.Cell>
                                <Styled.Cell>
                                    <Styled.Value>
                                        {record.toValue}
                                    </Styled.Value>
                                    <Styled.Unit>
                                        {record.toUnit}
                                    </Styled.Unit>
                                </Styled.Cell>
                                </Styled.Record>
                            </>)
                        })}
                    </>)
                    }
                    return null;                    
                })}
            </Styled.Content>
        </Styled.History>
    )
} 

export default History