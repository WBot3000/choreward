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
export declare type RewardCreateFormInputValues = {
    RewardName?: string;
    RewardCost?: number;
};
export declare type RewardCreateFormValidationValues = {
    RewardName?: ValidationFunction<string>;
    RewardCost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardCreateFormOverridesProps = {
    RewardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RewardName?: PrimitiveOverrideProps<TextFieldProps>;
    RewardCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RewardCreateFormProps = React.PropsWithChildren<{
    overrides?: RewardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RewardCreateFormInputValues) => RewardCreateFormInputValues;
    onSuccess?: (fields: RewardCreateFormInputValues) => void;
    onError?: (fields: RewardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardCreateFormInputValues) => RewardCreateFormInputValues;
    onValidate?: RewardCreateFormValidationValues;
} & React.CSSProperties>;
export default function RewardCreateForm(props: RewardCreateFormProps): React.ReactElement;
