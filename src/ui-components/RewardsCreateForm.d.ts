/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RewardsCreateFormInputValues = {
    RewardName?: string;
    RewardCost?: number;
};
export declare type RewardsCreateFormValidationValues = {
    RewardName?: ValidationFunction<string>;
    RewardCost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardsCreateFormOverridesProps = {
    RewardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RewardName?: PrimitiveOverrideProps<TextFieldProps>;
    RewardCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RewardsCreateFormProps = React.PropsWithChildren<{
    overrides?: RewardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RewardsCreateFormInputValues) => RewardsCreateFormInputValues;
    onSuccess?: (fields: RewardsCreateFormInputValues) => void;
    onError?: (fields: RewardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardsCreateFormInputValues) => RewardsCreateFormInputValues;
    onValidate?: RewardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RewardsCreateForm(props: RewardsCreateFormProps): React.ReactElement;
