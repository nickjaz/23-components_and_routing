import React from 'react';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section>
        { this.props.notes.length === 0 ?
          <div>
            <p>add a note</p>
          </div> :
          <ul>
          {this.props.notes.map((note, i) => {
            return (
              <li key={i}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </li>
            )
          })}
          </ul>
        }
      </section>
    )
  }
}

export default NoteList;
