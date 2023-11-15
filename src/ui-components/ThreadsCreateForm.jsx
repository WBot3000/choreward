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
import { createThreads } from "../graphql/mutations";
export default function ThreadsCreateForm(props) {
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
    ThreadTitles: "",
    UserID: "",
    Likes: "",
    VideoURL: "",
    Description: "",
  };
  const [ThreadTitles, setThreadTitles] = React.useState(
    initialValues.ThreadTitles
  );
  const [UserID, setUserID] = React.useState(initialValues.UserID);
  const [Likes, setLikes] = React.useState(initialValues.Likes);
  const [VideoURL, setVideoURL] = React.useState(initialValues.VideoURL);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setThreadTitles(initialValues.ThreadTitles);
    setUserID(initialValues.UserID);
    setLikes(initialValues.Likes);
    setVideoURL(initialValues.VideoURL);
    setDescription(initialValues.Description);
    setErrors({});
  };
  const validations = {
    ThreadTitles: [],
    UserID: [],
    Likes: [],
    VideoURL: [{ type: "URL" }],
    Description: [],
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
          ThreadTitles,
          UserID,
          Likes,
          VideoURL,
          Description,
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
            query: createThreads.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ThreadsCreateForm")}
      {...rest}
    >
      <TextField
        label="Thread titles"
        isRequired={false}
        isReadOnly={false}
        value={ThreadTitles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ThreadTitles: value,
              UserID,
              Likes,
              VideoURL,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.ThreadTitles ?? value;
          }
          if (errors.ThreadTitles?.hasError) {
            runValidationTasks("ThreadTitles", value);
          }
          setThreadTitles(value);
        }}
        onBlur={() => runValidationTasks("ThreadTitles", ThreadTitles)}
        errorMessage={errors.ThreadTitles?.errorMessage}
        hasError={errors.ThreadTitles?.hasError}
        {...getOverrideProps(overrides, "ThreadTitles")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={UserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ThreadTitles,
              UserID: value,
              Likes,
              VideoURL,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.UserID ?? value;
          }
          if (errors.UserID?.hasError) {
            runValidationTasks("UserID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("UserID", UserID)}
        errorMessage={errors.UserID?.errorMessage}
        hasError={errors.UserID?.hasError}
        {...getOverrideProps(overrides, "UserID")}
      ></TextField>
      <TextField
        label="Likes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Likes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ThreadTitles,
              UserID,
              Likes: value,
              VideoURL,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Likes ?? value;
          }
          if (errors.Likes?.hasError) {
            runValidationTasks("Likes", value);
          }
          setLikes(value);
        }}
        onBlur={() => runValidationTasks("Likes", Likes)}
        errorMessage={errors.Likes?.errorMessage}
        hasError={errors.Likes?.hasError}
        {...getOverrideProps(overrides, "Likes")}
      ></TextField>
      <TextField
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={VideoURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ThreadTitles,
              UserID,
              Likes,
              VideoURL: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.VideoURL ?? value;
          }
          if (errors.VideoURL?.hasError) {
            runValidationTasks("VideoURL", value);
          }
          setVideoURL(value);
        }}
        onBlur={() => runValidationTasks("VideoURL", VideoURL)}
        errorMessage={errors.VideoURL?.errorMessage}
        hasError={errors.VideoURL?.hasError}
        {...getOverrideProps(overrides, "VideoURL")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ThreadTitles,
              UserID,
              Likes,
              VideoURL,
              Description: value,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
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
