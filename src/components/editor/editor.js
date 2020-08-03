import React, {Component} from 'react';
import './editor.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
 
export default class editor extends Component {
  
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.expand = this.expand.bind(this);
    }
    handleChange(event) {
        this.props.store.input = event.target.value;
    }
    expand(){
      console.log("TESTETETSTSTST");
      this.props.store.editorExpanded = !this.props.store.editorExpanded;
      let element = document.getElementById("scrollabletextbox-div");
      let titlebar = document.getElementById("titlebar");
      if(this.props.store.editorExpanded){
        // add expandedWindow class
        element.classList.remove("scrollabletextbox-div-class");
        element.classList.add("expanded-window");
        titlebar.classList.remove("titlebars");
        titlebar.classList.add("titlebars-expanded-window");
        
      } else {
        // remove expandedWindow class
        element.classList.remove("expanded-window");
        element.classList.add("scrollabletextbox-div-class");
        titlebar.classList.remove("titlebars-expanded-window");
        titlebar.classList.add("titlebars");
        
      }
    }
    render() {
      const element = <button className="title-button" id="expand-button" onClick={this.expand}><FontAwesomeIcon id="expand-arrows-icon" icon={faExpandArrowsAlt}/></button>
      return <div className="component-editor" id="component-editor-box">
        <div id="titlebar" className="titlebars">
          <p id="edit-text">Editor</p>
          {element}
        </div>
        <div id="scrollabletextbox-div" className="scrollabletextbox-div-class">
        <textarea onChange={this.handleChange} placeholder="Enter your markdown code here" className="scrollabletextbox" name="note">
          
          </textarea>
        </div>
        
      </div>;
    }
  }
