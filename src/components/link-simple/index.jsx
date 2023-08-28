const LinkSimple = ({ title, to }) => {
  return (
    <>
      <a href={to} rel="noreferrer">
        {title}
      </a>
    </>
  );
};

export default LinkSimple;
