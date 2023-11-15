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
import { createFamilies } from "../graphql/mutations";
export default function FamiliesCreateForm(props) {
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
    FamilyName: "",
    Head: "",
    Members: "",
    ThreadsID: "",
    OnChanllengesID: "",
    EarnedPoints: "",
  };
  const [FamilyName, setFamilyName] = React.useState(initialValues.FamilyName);
  const [Head, setHead] = React.useState(initialValues.Head);
  const [Members, setMembers] = React.useState(initialValues.Members);
  const [ThreadsID, setThreadsID] = React.useState(initialValues.ThreadsID);
  const [OnChanllengesID, setOnChanllengesID] = React.useState(
    initialValues.OnChanllengesID
  );
  const [EarnedPoints, setEarnedPoints] = React.useState(
    initialValues.EarnedPoints
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFamilyName(initialValues.FamilyName);
    setHead(initialValues.Head);
    setMembers(initialValues.Members);
    setThreadsID(initialValues.ThreadsID);
    setOnChanllengesID(initialValues.OnChanllengesID);
    setEarnedPoints(initialValues.EarnedPoints);
    setErrors({});
  };
  const validations = {
    FamilyName: [],
    Head: [],
    Members: [],
    ThreadsID: [],
    OnChanllengesID: [],
    EarnedPoints: [],
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
          FamilyName,
          Head,
          Members,
          ThreadsID,
          OnChanllengesID,
          EarnedPoints,
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
            query: createFamilies.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "FamiliesCreateForm")}
      {...rest}
    >
      <TextField
        label="Family name"
        isRequired={false}
        isReadOnly={false}
        value={FamilyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName: value,
              Head,
              Members,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            value = result?.FamilyName ?? value;
          }
          if (errors.FamilyName?.hasError) {
            runValidationTasks("FamilyName", value);
          }
          setFamilyName(value);
        }}
        onBlur={() => runValidationTasks("FamilyName", FamilyName)}
        errorMessage={errors.FamilyName?.errorMessage}
        hasError={errors.FamilyName?.hasError}
        {...getOverrideProps(overrides, "FamilyName")}
      ></TextField>
      <TextField
        label="Head"
        isRequired={false}
        isReadOnly={false}
        value={Head}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head: value,
              Members,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            value = result?.Head ?? value;
          }
          if (errors.Head?.hasError) {
            runValidationTasks("Head", value);
          }
          setHead(value);
        }}
        onBlur={() => runValidationTasks("Head", Head)}
        errorMessage={errors.Head?.errorMessage}
        hasError={errors.Head?.hasError}
        {...getOverrideProps(overrides, "Head")}
      ></TextField>
      <TextField
        label="Members"
        isRequired={false}
        isReadOnly={false}
        value={Members}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members: value,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            value = result?.Members ?? value;
          }
          if (errors.Members?.hasError) {
            runValidationTasks("Members", value);
          }
          setMembers(value);
        }}
        onBlur={() => runValidationTasks("Members", Members)}
        errorMessage={errors.Members?.errorMessage}
        hasError={errors.Members?.hasError}
        {...getOverrideProps(overrides, "Members")}
      ></TextField>
      <TextField
        label="Threads id"
        isRequired={false}
        isReadOnly={false}
        value={ThreadsID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members,
              ThreadsID: value,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            value = result?.ThreadsID ?? value;
          }
          if (errors.ThreadsID?.hasError) {
            runValidationTasks("ThreadsID", value);
          }
          setThreadsID(value);
        }}
        onBlur={() => runValidationTasks("ThreadsID", ThreadsID)}
        errorMessage={errors.ThreadsID?.errorMessage}
        hasError={errors.ThreadsID?.hasError}
        {...getOverrideProps(overrides, "ThreadsID")}
      ></TextField>
      <TextField
        label="On chanllenges id"
        isRequired={false}
        isReadOnly={false}
        value={OnChanllengesID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members,
              ThreadsID,
              OnChanllengesID: value,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            value = result?.OnChanllengesID ?? value;
          }
          if (errors.OnChanllengesID?.hasError) {
            runValidationTasks("OnChanllengesID", value);
          }
          setOnChanllengesID(value);
        }}
        onBlur={() => runValidationTasks("OnChanllengesID", OnChanllengesID)}
        errorMessage={errors.OnChanllengesID?.errorMessage}
        hasError={errors.OnChanllengesID?.hasError}
        {...getOverrideProps(overrides, "OnChanllengesID")}
      ></TextField>
      <TextField
        label="Earned points"
        isRequired={false}
        isReadOnly={false}
        value={EarnedPoints}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints: value,
            };
            const result = onChange(modelFields);
            value = result?.EarnedPoints ?? value;
          }
          if (errors.EarnedPoints?.hasError) {
            runValidationTasks("EarnedPoints", value);
          }
          setEarnedPoints(value);
        }}
        onBlur={() => runValidationTasks("EarnedPoints", EarnedPoints)}
        errorMessage={errors.EarnedPoints?.errorMessage}
        hasError={errors.EarnedPoints?.hasError}
        {...getOverrideProps(overrides, "EarnedPoints")}
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
