export type ManType = {
    name: string;
    age: number;
    lessons: Array<{title: string}>;
    address: {
      street: {
        title: string;
      };
    };
  };

  type ManPropsType = {
    title: string;
    man: ManType;
    food: Array<string>;
    car: {model: string};
  };

export const ManComponent: React.FC<ManPropsType> = (props) => {

const {title, man } = props;
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    );
};