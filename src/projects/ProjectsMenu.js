import React, { Component } from 'react'

export default class ProjectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProject: 1,
        };
    }

    handleProjectClick = (project) => {
        this.state ({
            activeProject: project,
        });
    };

    renderContent = (projects)
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
