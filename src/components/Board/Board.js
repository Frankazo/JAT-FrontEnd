import React, { Component } from 'react'
import initialData from './initial-data'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = initialData
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd = result => {
        // TODO: reorder our column
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
            </DragDropContext>
        )
    }
}

export default Board;