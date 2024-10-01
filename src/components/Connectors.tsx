interface Props {
  connector: string | null;
}

const Connectors = ({ connector }: Props) => {
  return connector ? <div>connectors</div> : null;
};

export default Connectors;
