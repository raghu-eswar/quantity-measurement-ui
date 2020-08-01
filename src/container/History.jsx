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
                        <Styled.Heading>
                            <Styled.Title>from</Styled.Title>
                            <Styled.Title>to</Styled.Title>
                        </Styled.Heading>
                        {props.records[key].map(record => {
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