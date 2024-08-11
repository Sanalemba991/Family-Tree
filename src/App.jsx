import React from 'react';
import Tree from 'react-d3-tree';


const LaiChart = {
  name: 'Laitonjam',
  children: [
    {
      name: 'Manjor',
      wife: 'Ngambi',
      children: [
        {
          name: 'Suraj',
          wife: 'Bidyarani',
          children: [
            {
              name: 'Sanalemba',
            },
            {
              name: 'Kebisana',
            },
            {
              name: 'Joylita',
            },
            {
              name: 'Sujata',
            },
          ],
        },
        {
          name: 'Ratan',
          wife: 'Bamola',
          children: [
            {
              name: 'Chingkheinganba',
            },
            {
              name: 'Manganleibi',
            },
            {
              name: 'Anjalika',
            },
          ],
        },
        {
          name: 'James',
          wife: 'Jiteshori',
          children: [
            {
              name: 'Jension',
            },
            {
              name: 'Mangalthoiba',
            },
            {
              name: 'Magal',
            },
          ],
        },
        {
          name: 'Jackson',
          wife: 'Premita',
          children: [
            {
              name: 'Abungo',
            },
          ],
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <div id="treeWrapper" style={{ width: '100%', height: '100vh' }}>
      <Tree
        data={LaiChart}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        pathClassFunc={({ source, target }) => {
          if (!target.children) {
            return 'link__to-leaf';
          }
          return 'link__to-branch'; 
        }}
        orientation="vertical" 
        nodeSize={{ x: 300, y: 150 }} 
      />
    </div>
  );
}
