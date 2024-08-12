import React, { useState } from 'react';
import Tree from 'react-d3-tree';

const initialLaiChart = {
  name: 'Laitonjam',
  children: [],
};

const App = () => {
  const [laiChart, setLaiChart] = useState(initialLaiChart);
  const [nodeName, setNodeName] = useState('');
  const [parentNodeName, setParentNodeName] = useState('');

  const handleAddNode = () => {
    const newNode = {
      name: nodeName,
      children: [], 
    };

    const updateChart = (node) => {
      if (node.name === parentNodeName) {
        if (!node.children) node.children = [];
        node.children.push(newNode);
      } else if (node.children) {
        node.children.forEach(updateChart);
      }
    };

    const updatedChart = { ...laiChart };
    updateChart(updatedChart);
    setLaiChart(updatedChart);
    setNodeName('');
    setParentNodeName('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Tree
          data={laiChart}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathClassFunc={({ source, target }) => (!target.children ? 'link__to-leaf' : 'link__to-branch')}
          orientation="vertical"
          nodeSize={{ x: 300, y: 150 }}
        />
      </div>
      <div className='Ba'>
        <h3 className='sk'>Create Child Name</h3>
        <input className='Ko'
          type="text"
          placeholder="Node Name"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
        />
        <input className='uo'
          type="text"
          placeholder="Parent Name"
          value={parentNodeName}
          onChange={(e) => setParentNodeName(e.target.value)}
        />
        <button className='Add' onClick={handleAddNode}>Add Name</button>
      </div>
    </div>
  );
};

export default App;
