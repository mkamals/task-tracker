import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/taskdetails.css";

const TaskDetail = () => {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getTaskDetails = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const _data = await res.json();
      console.log(_data);
      setData(_data);
    };

    getTaskDetails();
  }, []);

  return (
    <div className="detail-content">
      <h3>{data.text}</h3>
      <p>{data.day}</p>
    </div>
  );
};

export default TaskDetail;
