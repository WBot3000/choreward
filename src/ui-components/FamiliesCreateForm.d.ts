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
export declare type FamiliesCreateFormInputValues = {
    FamilyName?: string;
    Head?: string;
    Members?: string;
    ThreadsID?: string;
    OnChanllengesID?: string;
    EarnedPoints?: string;
};
export declare type FamiliesCreateFormValidationValues = {
    FamilyName?: ValidationFunction<string>;
    Head?: ValidationFunction<string>;
    Members?: ValidationFunction<string>;
    ThreadsID?: ValidationFunction<string>;
    OnChanllengesID?: ValidationFunction<string>;
    EarnedPoints?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FamiliesCreateFormOverridesProps = {
    FamiliesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FamilyName?: PrimitiveOverrideProps<TextFieldProps>;
    Head?: PrimitiveOverrideProps<TextFieldProps>;
    Members?: PrimitiveOverrideProps<TextFieldProps>;
    ThreadsID?: PrimitiveOverrideProps<TextFieldProps>;
    OnChanllengesID?: PrimitiveOverrideProps<TextFieldProps>;
    EarnedPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FamiliesCreateFormProps = React.PropsWithChildren<{
    overrides?: FamiliesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FamiliesCreateFormInputValues) => FamiliesCreateFormInputValues;
    onSuccess?: (fields: FamiliesCreateFormInputValues) => void;
    onError?: (fields: FamiliesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FamiliesCreateFormInputValues) => FamiliesCreateFormInputValues;
    onValidate?: FamiliesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FamiliesCreateForm(props: FamiliesCreateFormProps): React.ReactElement;
