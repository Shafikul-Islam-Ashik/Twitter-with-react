import { Helmet } from "react-helmet";

const Twit = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TAce1zSb5En8WfVFQZ5qQ5OWlFeVXCmdYQ&usqp=CAU"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Twit;
