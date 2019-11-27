import React, { useState } from "react";
import FilterableTable from "react-filterable-table";

import "./App.css";

const App = () => {
  const [data, setData] = useState([
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item1",
      category: "bold",
      market: "denver",
      uid: "item1"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item2",
      category: "bold",
      market: "denver",
      uid: "item2"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item3",
      category: "bold",
      market: "denver",
      uid: "item3"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item4",
      category: "bold",
      market: "denver",
      uid: "item4"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item5",
      category: "spicy",
      market: "denver",
      uid: "item5"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item6",
      category: "spicy",
      market: "denver",
      uid: "item6"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item7",
      category: "spicy",
      market: "denver",
      uid: "item7"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item8",
      category: "spicy",
      market: "milwaukee",
      uid: "item8"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item9",
      category: "spicy",
      market: "milwaukee",
      uid: "item9"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item10",
      category: "mild",
      market: "milwaukee",
      uid: "item10"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item11",
      category: "mild",
      market: "milwaukee",
      uid: "item11"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item12",
      category: "mild",
      market: "milwaukee",
      uid: "item12"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item13",
      category: "mild",
      market: "milwaukee",
      uid: "item13"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item14",
      category: "mild",
      market: "milwaukee",
      uid: "item14"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item15",
      category: "mild",
      market: "denver",
      uid: "item15"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item16",
      category: "bold",
      market: "denver",
      uid: "item16"
    },
    {
      yes: true,
      no: false,
      tbd: false,
      name: "item17",
      category: "bold",
      market: "denver",
      uid: "item17"
    }
  ]);

  const handleChange = (e, uid) => {
    e.persist();
    setData(prevData => {
      const index = prevData.findIndex(item => item.uid === uid);
      const updatedData = [...prevData];
      const updatedItem = updatedData[index];
      updatedItem.yes = false;
      updatedItem.no = false;
      updatedItem.tbd = false;
      updatedItem[e.target.value] = true;
      updatedData[index] = updatedItem;
      return updatedData;
    });
  };

  const fields = [
    {
      name: "name",
      displayName: "Name",
      inputFilterable: true,
      sortable: true
    },
    {
      name: "category",
      displayName: "Category",
      inputFilterable: true,
      sortable: true
    },
    {
      name: "market",
      displayName: "Market",
      inputFilterable: true,
      sortable: true
    },

    {
      name: "yes",
      displayName: "Yes",
      sortable: true,
      render: ({ record, value }) => {
        return (
          <input
            type="radio"
            name={`submission-approved-${record.uid}`}
            value="yes"
            checked={value}
            onChange={e => handleChange(e, record.uid)}
          />
        );
      }
    },
    {
      name: "no",
      displayName: "No",
      sortable: true,
      render: ({ record, value }) => {
        return (
          <input
            type="radio"
            name={`submission-approved-${record.uid}`}
            value="no"
            checked={value}
            onChange={e => handleChange(e, record.uid)}
          />
        );
      }
    },
    {
      name: "tbd",
      displayName: "TBD",
      sortable: true,
      render: ({ record, value }) => {
        return (
          <input
            type="radio"
            name={`submission-approved-${record.uid}`}
            value="tbd"
            checked={value}
            onChange={e => handleChange(e, record.uid)}
          />
        );
      }
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Reproduction of table sorting issue</p>
        <FilterableTable
          namespace="data"
          initialSort="name"
          data={data}
          fields={fields}
          noRecordsMessage="There is nothing to display"
          noFilteredRecordsMessage="Nothing matches your filters!"
        />
      </header>
    </div>
  );
};

export default App;
