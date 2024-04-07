import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
  return (
    <div className="flex gap-2">
      <button className="btn btn-secondary text-white">Breaking News</button>

      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-16" to="/">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as......
        </Link>
      </Marquee>
    </div>
  );
};

export default Breaking;
