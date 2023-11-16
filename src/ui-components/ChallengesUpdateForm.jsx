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
import { getChallenges } from "../graphql/queries";
import { updateChallenges } from "../graphql/mutations";
export default function ChallengesUpdateForm(props) {
  const {
    id: idProp,
    challenges: challengesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ChallengeList: "",
    Family1Name: "",
    Family2Name: "",
    EndTime: "",
    RwardPoints: "",
  };
  const [ChallengeList, setChallengeList] = React.useState(
    initialValues.ChallengeList
  );
  const [Family1Name, setFamily1Name] = React.useState(
    initialValues.Family1Name
  );
  const [Family2Name, setFamily2Name] = React.useState(
    initialValues.Family2Name
  );
  const [EndTime, setEndTime] = React.useState(initialValues.EndTime);
  const [RwardPoints, setRwardPoints] = React.useState(
    initialValues.RwardPoints
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = challengesRecord
      ? { ...initialValues, ...challengesRecord }
      : initialValues;
    setChallengeList(cleanValues.ChallengeList);
    setFamily1Name(cleanValues.Family1Name);
    setFamily2Name(cleanValues.Family2Name);
    setEndTime(cleanValues.EndTime);
    setRwardPoints(cleanValues.RwardPoints);
    setErrors({});
  };
  const [challengesRecord, setChallengesRecord] =
    React.useState(challengesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getChallenges.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getChallenges
        : challengesModelProp;
      setChallengesRecord(record);
    };
    queryData();
  }, [idProp, challengesModelProp]);
  React.useEffect(resetStateValues, [challengesRecord]);
  const validations = {
    ChallengeList: [],
    Family1Name: [],
    Family2Name: [],
    EndTime: [],
    RwardPoints: [],
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
          ChallengeList: ChallengeList ?? null,
          Family1Name: Family1Name ?? null,
          Family2Name: Family2Name ?? null,
          EndTime: EndTime ?? null,
          RwardPoints: RwardPoints ?? null,
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
            query: updateChallenges.replaceAll("__typename", ""),
            variables: {
              input: {
                id: challengesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChallengesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Challenge list"
        isRequired={false}
        isReadOnly={false}
        value={ChallengeList}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ChallengeList: value,
              Family1Name,
              Family2Name,
              EndTime,
              RwardPoints,
            };
            const result = onChange(modelFields);
            value = result?.ChallengeList ?? value;
          }
          if (errors.ChallengeList?.hasError) {
            runValidationTasks("ChallengeList", value);
          }
          setChallengeList(value);
        }}
        onBlur={() => runValidationTasks("ChallengeList", ChallengeList)}
        errorMessage={errors.ChallengeList?.errorMessage}
        hasError={errors.ChallengeList?.hasError}
        {...getOverrideProps(overrides, "ChallengeList")}
      ></TextField>
      <TextField
        label="Family1 name"
        isRequired={false}
        isReadOnly={false}
        value={Family1Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ChallengeList,
              Family1Name: value,
              Family2Name,
              EndTime,
              RwardPoints,
            };
            const result = onChange(modelFields);
            value = result?.Family1Name ?? value;
          }
          if (errors.Family1Name?.hasError) {
            runValidationTasks("Family1Name", value);
          }
          setFamily1Name(value);
        }}
        onBlur={() => runValidationTasks("Family1Name", Family1Name)}
        errorMessage={errors.Family1Name?.errorMessage}
        hasError={errors.Family1Name?.hasError}
        {...getOverrideProps(overrides, "Family1Name")}
      ></TextField>
      <TextField
        label="Family2 name"
        isRequired={false}
        isReadOnly={false}
        value={Family2Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ChallengeList,
              Family1Name,
              Family2Name: value,
              EndTime,
              RwardPoints,
            };
            const result = onChange(modelFields);
            value = result?.Family2Name ?? value;
          }
          if (errors.Family2Name?.hasError) {
            runValidationTasks("Family2Name", value);
          }
          setFamily2Name(value);
        }}
        onBlur={() => runValidationTasks("Family2Name", Family2Name)}
        errorMessage={errors.Family2Name?.errorMessage}
        hasError={errors.Family2Name?.hasError}
        {...getOverrideProps(overrides, "Family2Name")}
      ></TextField>
      <TextField
        label="End time"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={EndTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ChallengeList,
              Family1Name,
              Family2Name,
              EndTime: value,
              RwardPoints,
            };
            const result = onChange(modelFields);
            value = result?.EndTime ?? value;
          }
          if (errors.EndTime?.hasError) {
            runValidationTasks("EndTime", value);
          }
          setEndTime(value);
        }}
        onBlur={() => runValidationTasks("EndTime", EndTime)}
        errorMessage={errors.EndTime?.errorMessage}
        hasError={errors.EndTime?.hasError}
        {...getOverrideProps(overrides, "EndTime")}
      ></TextField>
      <TextField
        label="Rward points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={RwardPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ChallengeList,
              Family1Name,
              Family2Name,
              EndTime,
              RwardPoints: value,
            };
            const result = onChange(modelFields);
            value = result?.RwardPoints ?? value;
          }
          if (errors.RwardPoints?.hasError) {
            runValidationTasks("RwardPoints", value);
          }
          setRwardPoints(value);
        }}
        onBlur={() => runValidationTasks("RwardPoints", RwardPoints)}
        errorMessage={errors.RwardPoints?.errorMessage}
        hasError={errors.RwardPoints?.hasError}
        {...getOverrideProps(overrides, "RwardPoints")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || challengesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || challengesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
