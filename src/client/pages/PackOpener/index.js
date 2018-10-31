import React, { Component } from 'react';
import { number, func } from 'prop-types';
import { map, filter, isEmpty } from 'ramda';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Container, PackOpenerInner, PacksStartingPoint } from './styles';
import { HOME } from '../../constants/router';
import Pack from '../../components/Pack';
import OpenedCards from './OpenedCards';
import { getOpenedPackCards } from '../../requests';

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
  top: '222px',
  left: '10px',
});

const getPackStyle = (isDragging, draggableStyle, packId) => ({
  position: 'absolute',
  padding: 0,
  marginTop: `${packId * 5}px`,
  marginLeft: `${packId * 5}px`,
  height: '220px',
  width: '160px',
  ...draggableStyle,
});

const getPackRecipientStyle = () => ({
  position: 'absolute',
  height: '220px',
  width: '160px',
  backgrounColor: 'blue',
  top: '222px',
  left: '478px',
});

class PackOpener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toOpen: packs,
      opening: false,
      openedCards: [],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragUpdate = this.onDragUpdate.bind(this);
    this.handleChangeOpening = this.handleChangeOpening.bind(this);
    this.handleChangeOpenedCards = this.handleChangeOpenedCards.bind(this);
  }

  onDragStart = () => {
    console.log('startDrag');
  };
  onDragUpdate = () => {
    console.log('updateDrag');
  };
  handleRemoveFromToOpen = id => {
    const isPackId = pack => pack.id !== id;
    this.setState({ toOpen: filter(isPackId, this.state.toOpen) });
  };
  handleChangeOpening = newValue => this.setState({ opening: newValue });
  handleChangeOpenedCards = newCards =>
    this.setState({ openedCards: newCards });
  onDragEnd = ({ destination, draggableId, source }) => {
    if (
      destination &&
      source &&
      destination.droppableId === 'openner' &&
      source.droppableId === 'packs'
    ) {
      this.handleRemoveFromToOpen(draggableId);
      this.handleChangeOpening(true);
      getOpenedPackCards()
        .then(cards => this.handleChangeOpenedCards(cards))
        .catch(err => console.log('err: ', err));
    }
  };

  render() {
    const { modifyLocation, top } = this.props;
    const { toOpen, opening, openedCards } = this.state;
    return (
      <Container top={top} onClick={() => modifyLocation(HOME)}>
        <PackOpenerInner onClick={e => e.stopPropagation()}>
          {opening &&
            !isEmpty(openedCards) && (
              <OpenedCards
                cards={openedCards}
                handleChangeOpening={this.handleChangeOpening}
                handleChangeOpenedCards={this.handleChangeOpenedCards}
              />
            )}
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
          >
            <Droppable droppableId="packs" direction={'horizontal'}>
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
                              pack.id,
                            )}
                          >
                            <Pack
                              packId={pack.id}
                              handleDrag={provided.dragHandleProps}
                            />
                          </div>
                        )}
                      </Draggable>
                    ),
                    toOpen,
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="openner">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getPackRecipientStyle()}>
                  {opening &&
                    isEmpty(openedCards) && (
                      <Pack packId={0} handleDrag={provided.dragHandleProps} />
                    )}
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
