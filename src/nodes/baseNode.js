import Card from "../components/ui/Card";

export const BaseNode = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  );
};