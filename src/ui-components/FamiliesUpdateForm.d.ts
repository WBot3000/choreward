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
export declare type FamiliesUpdateFormInputValues = {
    FamilyName?: string;
    Head?: string;
    Members?: string;
    Rewards?: string[];
    ThreadsID?: string;
    OnChanllengesID?: string;
    EarnedPoints?: number;
};
export declare type FamiliesUpdateFormValidationValues = {
    FamilyName?: ValidationFunction<string>;
    Head?: ValidationFunction<string>;
    Members?: ValidationFunction<string>;
    Rewards?: ValidationFunction<string>;
    ThreadsID?: ValidationFunction<string>;
    OnChanllengesID?: ValidationFunction<string>;
    EarnedPoints?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FamiliesUpdateFormOverridesProps = {
    FamiliesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FamilyName?: PrimitiveOverrideProps<TextFieldProps>;
    Head?: PrimitiveOverrideProps<TextFieldProps>;
    Members?: PrimitiveOverrideProps<TextFieldProps>;
    Rewards?: PrimitiveOverrideProps<TextFieldProps>;
    ThreadsID?: PrimitiveOverrideProps<TextFieldProps>;
    OnChanllengesID?: PrimitiveOverrideProps<TextFieldProps>;
    EarnedPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FamiliesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FamiliesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    families?: any;
    onSubmit?: (fields: FamiliesUpdateFormInputValues) => FamiliesUpdateFormInputValues;
    onSuccess?: (fields: FamiliesUpdateFormInputValues) => void;
    onError?: (fields: FamiliesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FamiliesUpdateFormInputValues) => FamiliesUpdateFormInputValues;
    onValidate?: FamiliesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FamiliesUpdateForm(props: FamiliesUpdateFormProps): React.ReactElement;
