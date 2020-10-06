import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';




export default class TreeViewr extends Component {
  constructor(props) {
    super(props);
    this.state = {}


  };
  render() {
    const renderTree = (nodes) => (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );


    return (
      <div>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(this.props.tree)}
        </TreeView>

      </div>
    )
  }
}
