import ReactECharts from "echarts-for-react";

const DashboardChart = () => {
  let base = +new Date(2016, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data = [];
  let data2 = [];

  for (let i = 1; i < 10; i++) {
    let now = new Date((base += oneDay));
    let dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
      "-"
    );

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }

  let option = {
    title: {
      left: "center",
    },
    legend: {
      top: "bottom",
      data: ["Intention"],
    },
    tooltip: {
      triggerOn: "none",
      position: function (pt: any) {
        return [pt[0], 130];
      },
    },
    toolbox: {
      left: "center",
      itemSize: 25,
      top: 55,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
      },
    },
    xAxis: {
      type: "time",
      axisPointer: {
        value: "2016-10-7",
        snap: true,
        lineStyle: {
          color: "#7581BD",
          width: 2,
        },
        label: {
          show: true,
          backgroundColor: "#7581BD",
        },
        handle: {
          show: true,
          color: "#7581BD",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      z: 10,
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160,
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#0770FF",
        },
        stack: "a",
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#152B67",
              },
              {
                offset: 0.5,
                color: "#152B6720",
              },
              {
                offset: 1,
                color: "#152B6710",
              },
            ],
          },
        },
        data: data,
      },
      {
        name: "Fake Data",
        type: "line",
        smooth: true,
        stack: "a",
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#F2597F",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#F2597F",
              },
              {
                offset: 0.5,
                color: "#F2597F20",
              },
              {
                offset: 1,
                color: "#F2597F10",
              },
            ],
          },
        },
        data: data2,
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      className="w-full"
      style={{ height: "16rem" }}
    />
  );
};

export default DashboardChart;
