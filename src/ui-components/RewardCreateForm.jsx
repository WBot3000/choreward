/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createReward } from "../graphql/mutations";
export default function RewardCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    RewardName: "",
    RewardCost: "",
  };
  const [RewardName, setRewardName] = React.useState(initialValues.RewardName);
  const [RewardCost, setRewardCost] = React.useState(initialValues.RewardCost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRewardName(initialValues.RewardName);
    setRewardCost(initialValues.RewardCost);
    setErrors({});
  };
  const validations = {
    RewardName: [],
    RewardCost: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          RewardName,
          RewardCost,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createReward.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RewardCreateForm")}
      {...rest}
    >
      <TextField
        label="Reward name"
        isRequired={false}
        isReadOnly={false}
        value={RewardName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RewardName: value,
              RewardCost,
            };
            const result = onChange(modelFields);
            value = result?.RewardName ?? value;
          }
          if (errors.RewardName?.hasError) {
            runValidationTasks("RewardName", value);
          }
          setRewardName(value);
        }}
        onBlur={() => runValidationTasks("RewardName", RewardName)}
        errorMessage={errors.RewardName?.errorMessage}
        hasError={errors.RewardName?.hasError}
        {...getOverrideProps(overrides, "RewardName")}
      ></TextField>
      <TextField
        label="Reward cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={RewardCost}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              RewardName,
              RewardCost: value,
            };
            const result = onChange(modelFields);
            value = result?.RewardCost ?? value;
          }
          if (errors.RewardCost?.hasError) {
            runValidationTasks("RewardCost", value);
          }
          setRewardCost(value);
        }}
        onBlur={() => runValidationTasks("RewardCost", RewardCost)}
        errorMessage={errors.RewardCost?.errorMessage}
        hasError={errors.RewardCost?.hasError}
        {...getOverrideProps(overrides, "RewardCost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
