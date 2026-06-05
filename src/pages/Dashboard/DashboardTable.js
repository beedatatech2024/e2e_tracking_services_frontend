import "../../styles/Dashboard/table.css";

function DashboardTable({ tableData }) {

  /* ACTION FUNCTIONS */

  const handleView = (item) => {

    alert(`Viewing ${item.candidateName}`);

  };

  const handleEdit = (item) => {

    alert(`Editing ${item.candidateName}`);

  };

  const handleDelete = (id) => {

    alert(`Deleting Row ID: ${id}`);

  };

  return (

    <div className="e2e_table_container">

      <div className="e2e_table_header">

        <h3>Recent Submissions</h3>

      </div>

      <table className="e2e_dashboard_table">

        <thead>

          <tr>

            <th>Sno</th>

            <th>Submission Date</th>

            <th>Recruiter Name</th>

            <th>Candidate Name</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {tableData.map((item, index) => (

            <tr key={item.id}>

              <td>{index + 1}</td>

              <td>{item.submissionDate}</td>

              <td>{item.recruiterName}</td>

              <td>{item.candidateName}</td>

              <td className="e2e_action_buttons">

                <button
                  className="e2e_view_btn"
                  onClick={() => handleView(item)}
                >
                  View
                </button>

                <button
                  className="e2e_edit_btn"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="e2e_delete_btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default DashboardTable;