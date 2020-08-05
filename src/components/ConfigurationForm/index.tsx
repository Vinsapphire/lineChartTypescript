import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPoints } from "../../store/points/actions";
import { IPointRequestConfig } from "../../store/points/types";
import { getLoadingState } from "../../store/points/selectors";
import FormInput from "./FormInput";

const initialFormState: IPointRequestConfig = {
  startingPoint: 0,
  endingPoint: 1,
  step: 1,
};

const ConfigurationForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(initialFormState);
  const [changed, setChanged] = useState(true);
  const loading = useSelector(getLoadingState);

  const handleClick = (): void => {
    dispatch(getPoints(formState));
    setChanged(false);
  };

  const inputChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget;
    setFormState((state) => ({ ...state, [name]: value }));
    setChanged(true);
  };

  return (
    <div className="configuration-form">
      <FormInput
        label="Starting point"
        id="startingPoint"
        value={formState.startingPoint}
        onChange={inputChangeHandler}
      />
      <FormInput
        label="Ending point"
        id="endingPoint"
        value={formState.endingPoint}
        onChange={inputChangeHandler}
      />
      <FormInput
        label="Step"
        id="step"
        value={formState.step}
        onChange={inputChangeHandler}
      />
      <button onClick={handleClick} disabled={loading || !changed}>
        Generate
      </button>
    </div>
  );
};

export default ConfigurationForm;
