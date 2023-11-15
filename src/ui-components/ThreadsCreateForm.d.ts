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
export declare type ThreadsCreateFormInputValues = {
    ThreadTitles?: string;
    ThreadTypes?: string;
    UserID?: string;
    Likes?: number;
    VideoURL?: string;
    Description?: string;
};
export declare type ThreadsCreateFormValidationValues = {
    ThreadTitles?: ValidationFunction<string>;
    ThreadTypes?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    Likes?: ValidationFunction<number>;
    VideoURL?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreadsCreateFormOverridesProps = {
    ThreadsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ThreadTitles?: PrimitiveOverrideProps<TextFieldProps>;
    ThreadTypes?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    Likes?: PrimitiveOverrideProps<TextFieldProps>;
    VideoURL?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThreadsCreateFormProps = React.PropsWithChildren<{
    overrides?: ThreadsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThreadsCreateFormInputValues) => ThreadsCreateFormInputValues;
    onSuccess?: (fields: ThreadsCreateFormInputValues) => void;
    onError?: (fields: ThreadsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreadsCreateFormInputValues) => ThreadsCreateFormInputValues;
    onValidate?: ThreadsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThreadsCreateForm(props: ThreadsCreateFormProps): React.ReactElement;
