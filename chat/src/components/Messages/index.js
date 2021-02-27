// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Local Imports
import './messages.scss';

// == Composant
const Messages = ({ messages, id, identity }) => (
  <div className="messages">
    {messages.map((message, index) => (
      message.id === id
        ? (
          <div key={index} className="messages--own">
            <div className="messages--body">
              {message.body}
            </div>
          </div>
        )
        : (
          <div key={index} className="messages--notification">
            <img src={identity.picture.thumbnail} alt="user-thumbnail" className="messages--thumbnail" />
            <div className="messages--name">
              {identity.name.first} {identity.name.last}
            </div>
            <div className="messages--body">
              {message.body}
            </div>
          </div>
        )

    ))}

  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string,
};
// == Export
export default Messages;
