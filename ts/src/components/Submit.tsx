import Button from "@components/Button";

const Submit = ({ children, ...rest }) => {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
};

export default Submit;
