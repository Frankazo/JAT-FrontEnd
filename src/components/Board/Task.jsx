import React from 'react';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Content = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? '#c9d6d4' : '#E9F3F1')};
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index} >
                {(provided, snapshot) => (
                    <Content
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Content>
                ) }
            </Draggable>
        )
    }
}