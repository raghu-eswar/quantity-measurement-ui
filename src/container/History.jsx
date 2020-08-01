import React from 'react'
import * as Styled from '../styles/history.styled';

function History(props) {
    return (
        <Styled.History>
            <Styled.Content>
                {Object.keys(props.records).map((key) => {
                    if(props.records[key].length > 0) {
                    return (<>
                        <Styled.Title>{props.records[key][0].name}</Styled.Title>
                        {props.records[key].map(record => {
                            return (<>
                                <Styled.Record>
                                <Styled.Cell>
                                    <Styled.Unit>
                                        {record.fromUnit}
                                    </Styled.Unit>
                                    <Styled.Value>
                                        {record.fromValue}
                                    </Styled.Value>
                                </Styled.Cell>
                                <Styled.Cell>=</Styled.Cell>
                                <Styled.Cell>
                                    <Styled.Unit>
                                        {record.toUnit}
                                    </Styled.Unit>
                                    <Styled.Value>
                                        {record.toValue}
                                    </Styled.Value>
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