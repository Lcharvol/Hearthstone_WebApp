import React, { Component } from 'react';
import { number, func } from 'prop-types';
import { map } from 'ramda';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Container, PackOpenerInner, PacksStartingPoint } from './styles';
import { HOME } from '../../constants/router';
import Pack from '../../components/Pack';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
};

const packs = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const getPacksPileStyle = () => ({
  position: 'absolute',
  height: '220px',
  width: '160px',
  backgrounColor: 'blue',
  top: '220px',
});

const getPackStyle = (isDragging, draggableStyle) => ({
  position: 'absolute',
  padding: 0,
  margin: `0 0 0 0`,
  height: '220px',
  width: '160px',
  ...draggableStyle,
});

const getPackRecipientStyle = () => ({
  position: 'absolute',
  height: '220px',
  width: '160px',
  backgrounColor: 'blue',
  top: '220px',
  left: '470px',
});

class PackOpener extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragUpdate = this.onDragUpdate.bind(this);
  }

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {
    // the only one that is required
  };

  render() {
    const { modifyLocation, top } = this.props;
    return (
      <Container top={top} onClick={() => modifyLocation(HOME)}>
        <PackOpenerInner onClick={e => e.stopPropagation()}>
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
          >
            <Droppable droppableId="packs">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getPacksPileStyle()}>
                  {map(
                    pack => (
                      <Draggable
                        key={pack.id}
                        draggableId={pack.id}
                        index={pack.id}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={getPackStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                            )}
                          >
                            <Pack handleDrag={provided.dragHandleProps} />
                          </div>
                        )}
                      </Draggable>
                    ),
                    packs,
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="openner">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getPackRecipientStyle()}>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </PackOpenerInner>
      </Container>
    );
  }
}

PackOpener.propTypes = propTypes;

export default PackOpener;
