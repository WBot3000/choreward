/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createFamilies } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    Members: [],
    Rewards: [],
    ThreadsID: "",
    OnChanllengesID: "",
    EarnedPoints: "",
  };
  const [FamilyName, setFamilyName] = React.useState(initialValues.FamilyName);
  const [Head, setHead] = React.useState(initialValues.Head);
  const [Members, setMembers] = React.useState(initialValues.Members);
  const [Rewards, setRewards] = React.useState(initialValues.Rewards);
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
    setCurrentMembersValue("");
    setRewards(initialValues.Rewards);
    setCurrentRewardsValue("");
    setThreadsID(initialValues.ThreadsID);
    setOnChanllengesID(initialValues.OnChanllengesID);
    setEarnedPoints(initialValues.EarnedPoints);
    setErrors({});
  };
  const [currentMembersValue, setCurrentMembersValue] = React.useState("");
  const MembersRef = React.createRef();
  const [currentRewardsValue, setCurrentRewardsValue] = React.useState("");
  const RewardsRef = React.createRef();
  const validations = {
    FamilyName: [],
    Head: [],
    Members: [],
    Rewards: [],
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
          Rewards,
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
              Rewards,
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
              Rewards,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members: values,
              Rewards,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            values = result?.Members ?? values;
          }
          setMembers(values);
          setCurrentMembersValue("");
        }}
        currentFieldValue={currentMembersValue}
        label={"Members"}
        items={Members}
        hasError={errors?.Members?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Members", currentMembersValue)
        }
        errorMessage={errors?.Members?.errorMessage}
        setFieldValue={setCurrentMembersValue}
        inputFieldRef={MembersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Members"
          isRequired={false}
          isReadOnly={false}
          value={currentMembersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Members?.hasError) {
              runValidationTasks("Members", value);
            }
            setCurrentMembersValue(value);
          }}
          onBlur={() => runValidationTasks("Members", currentMembersValue)}
          errorMessage={errors.Members?.errorMessage}
          hasError={errors.Members?.hasError}
          ref={MembersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Members")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members,
              Rewards: values,
              ThreadsID,
              OnChanllengesID,
              EarnedPoints,
            };
            const result = onChange(modelFields);
            values = result?.Rewards ?? values;
          }
          setRewards(values);
          setCurrentRewardsValue("");
        }}
        currentFieldValue={currentRewardsValue}
        label={"Rewards"}
        items={Rewards}
        hasError={errors?.Rewards?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Rewards", currentRewardsValue)
        }
        errorMessage={errors?.Rewards?.errorMessage}
        setFieldValue={setCurrentRewardsValue}
        inputFieldRef={RewardsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Rewards"
          isRequired={false}
          isReadOnly={false}
          value={currentRewardsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Rewards?.hasError) {
              runValidationTasks("Rewards", value);
            }
            setCurrentRewardsValue(value);
          }}
          onBlur={() => runValidationTasks("Rewards", currentRewardsValue)}
          errorMessage={errors.Rewards?.errorMessage}
          hasError={errors.Rewards?.hasError}
          ref={RewardsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Rewards")}
        ></TextField>
      </ArrayField>
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
              Rewards,
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
              Rewards,
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
        type="number"
        step="any"
        value={EarnedPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              FamilyName,
              Head,
              Members,
              Rewards,
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
