import React, {Component} from 'react';
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'
import marked from 'marked'
const element = <FontAwesomeIcon id="expand-arrows-icon" icon={faExpandArrowsAlt} />;

class Previewer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
      return <div className="component-previewer">
      <div id="titlebar-previewer">
        <p id="previewer-title-text">Previewer</p>
        {element}
      </div>
      <div id="scrollabletextbox-div-previewer">
      <div id="preview" placeholder="Enter your markdown code here" dangerouslySetInnerHTML={{__html: marked(this.props.store.input)}} className="scrollabletextbox-previewer" name="note">
        
        </div>
      </div>
      
    </div>;
    }
  }
  const ObserverPreviewer = observer(Previewer);
  export default ObserverPreviewer;