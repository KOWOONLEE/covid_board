import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Mainchart = () => {
  const [globalContents, setGlobalContents] = useState("");
  const [koreaContents, setKoreaContents] = useState("");

  useEffect(() => {
    const chartLoading = async () => {
      try {
        const { data } = await axios.get(
          "https://api.covid19api.com/dayone/country/korea-south/status/confirmed"
        );
        setGlobalContents(data);
        setKoreaContents(
          globalContents.slice(
            globalContents.length - 6,
            globalContents.length - 1
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    chartLoading();
  }, [koreaContents]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "확진자추이비교",
      },
    },
  };

  const [koreaCase, setKoreaCase] = useState({
    labels:
      Data &&
      Data.slice(Data.length - 6, Data.length - 1).map((data) => data.Date),
    datasets: [
      {
        label: "korea",
        data:
          Data &&
          Data.slice(Data.length - 6, Data.length - 1).map(
            (data) => data.Cases
          ),
        backgroundColor: ["blue"],
      },
      {},
    ],
  });

  return (
    <StyledChart>
      <div className="chartWrap">
        <div className="totalStates">
          {/* <div className="statesTitle">
            <span>확진자 추이 비교</span>
          </div> */}
          <div>
            <Line data={koreaCase} options={options} width={50} height={35} />
          </div>
        </div>
      </div>
    </StyledChart>
  );
};

export default Mainchart;

const StyledChart = styled.div`
  .chartWrap {
    display: flex;
    width: 90vw;
    height: 42vh;
    align-items: center;
    justify-content: center;
    margin: 5vw;
  }
  .totalStates {
    width: 100%;
    height: 42vh;
    background-color: #e8f1f7;
    border-radius: 10px;
    padding: 15px;
  }
  .statesTitle {
    height: 20%;
    font-size: 1.1em;
    font-weight: 600;
  }
`;
