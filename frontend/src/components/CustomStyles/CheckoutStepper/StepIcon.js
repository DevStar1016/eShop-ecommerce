import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  AccountBalance,
  LocalShipping,
  PeopleAlt,
  ShoppingBasket,
} from "@material-ui/icons";

/////////////////////////////////////////////   Style Step Icon   //////////////////////////////////////////////
export const useStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage: "linear-gradient(45deg, #045694,  30%, #2196f3 90%)",
    boxShadow: "0 8px 22px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage: "linear-gradient(45deg, #045694,  30%, #2196f3 90%)",
  },
});

////////////////////////////////////////////   Step Icon   /////////////////////////////////////////////
export function StepIcon(props) {
  const classes = useStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PeopleAlt />,
    2: <LocalShipping />,
    3: <AccountBalance />,
    4: <ShoppingBasket />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
