import {
    cloneElement,
    JSXElementConstructor,
    PropsWithChildren,
    ReactElement,
} from "react";
import { Controller } from "react-hook-form";
import { ControlledSelectProps } from "./controlled_select.types";

const ControlledSelect: React.FC<PropsWithChildren<ControlledSelectProps>> = ({
  children,
  control,
  message,
  name,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        cloneElement(
          children as ReactElement<
            unknown,
            string | JSXElementConstructor<unknown>
          >,
          { ...field }
        )
      }
      rules={{
        required: {
          value: true,
          message,
        },
        onChange,
      }}
    />
  );
};

export default ControlledSelect;
