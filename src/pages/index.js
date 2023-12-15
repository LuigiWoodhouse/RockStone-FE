import Board from "../components/Board";
import Layout from "../components/Layout";
import ReactRecorder from '../components/ReactRecorder';

export default function Home() {
  return (
    <>
      <Layout props={[<ReactRecorder key={0}/>, <Board  key={1}/> , <div key={0}></div>]}/>
    </>
  );
}
