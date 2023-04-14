import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";

interface Props {
  title: string;
  value: number;
}

const formatter = (value: number): JSX.Element => (
  <CountUp end={value} separator="," />
);

const view: React.FC<Props> = ({title,value}) => {
  return (
    <>
      <Card>
        <Statistic title={title} value={value} formatter={formatter} />
      </Card>
    </>
  );
};

export default view;
