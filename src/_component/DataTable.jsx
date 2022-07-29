import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "./DataTable.css";
import { display } from "@mui/system";

const columns = [
  {
    field: "id",
    headerName: "Sr. No.",
    headerClassName: "custom--header",
    flex: 1,
  },
  {
    field: "authorName",
    headerName: "Author Name",
    headerClassName: "custom--header",
    flex: 1,
  },
  {
    field: "dataSourceName",
    headerName: "Data Source Name",
    headerClassName: "custom--header",
    flex: 1,
  },
  {
    field: "created",
    headerName: "Created",
    headerClassName: "custom--header",
    type: "date",
    flex: 1,
  },
  {
    field: "modified",
    headerName: "Modified",
    headerClassName: "custom--header",
    type: "date",
    flex: 1,
  },
  {
    field: "modify",
    sortable: false,
    flex: 1,
    renderCell: () => <PreviewOutlinedIcon />,
    renderHeader: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <SaveAsOutlinedIcon
          sx={{
            padding: "10px",
            backgroundColor: "#fceacf",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        />
        <DeleteForeverOutlinedIcon
          sx={{
            padding: "10px",
            backgroundColor: "#fceacf",
            borderRadius: "10px",
            marginLeft: "10px",
          }}
        />
      </div>
    ),
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    authorName: "Kuvira Jakati",
    dataSourceName: "Amazon Review Data Set",
    created: "01/01/2022",
  },
  {
    id: 2,
    authorName: "Mayukhi Pai",
    dataSourceName: "Facial Image Data Set",
    created: "02/01/2022",
  },
  {
    id: 3,
    authorName: "Mangai Pitaliya",
    dataSourceName: "Wine Quality Data Set",
    created: "03/01/2022",
  },
  {
    id: 4,
    authorName: "Harnoor Kanvari",
    dataSourceName: "Spam Mail Data Set",
    created: "04/01/2022",
  },
  {
    id: 5,
    authorName: "Jaiyush Jangid",
    dataSourceName: "Spam SMS Data Set",
    created: "05/01/2022",
  },
  {
    id: 6,
    authorName: "Ponni Totagi",
    dataSourceName: null,
    created: "06/01/2022",
  },
  {
    id: 7,
    authorName: "Clifford",
    dataSourceName: "Ferrara",
    created: "07/01/2022",
  },
  {
    id: 8,
    authorName: "Frances",
    dataSourceName: "Rossini",
    created: "08/01/2022",
  },
  {
    id: 9,
    authorName: "Roxie",
    dataSourceName: "Harvey",
    created: "09/01/2022",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "auto", width: "72%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
